import { Installation, InstallationQuery } from "@slack/oauth";
import { installationStore } from "./constants";

export const storeInstallation = async (installation: Installation) => {
	const installationDetails = {
		appId: installation.appId,
		authVersion: installation.authVersion,
		bot: installation.bot,
		enterprise: { id: installation.enterprise?.id, name: installation.enterprise?.name },
		enterpriseUrl: installation?.enterpriseUrl,
		// incomingWebhook: installation.incomingWebhook,
		isEnterpriseInstall: installation.isEnterpriseInstall,
		metadata: installation?.metadata,
		team: installation.team,
		tokenType: installation.tokenType,
		user: installation.user,
	} as any;

	if (installation.isEnterpriseInstall && installation.enterprise !== undefined) {
		await installationStore.put(installationDetails, installation.enterprise.id);
		return;
	}

	if (installation.team !== undefined) {
		await installationStore.put(installationDetails, installation.team.id);
		return;
	}
	throw new Error("Failed saving installation data to installationStore");
};

export const fetchInstallation = async (installQuery: InstallationQuery<boolean>) => {
	if (installQuery.isEnterpriseInstall && installQuery.enterpriseId !== undefined) {
		const installation = await installationStore.get(installQuery.enterpriseId);
		return installation as unknown as Installation<"v1" | "v2", boolean>;
	}

	if (installQuery.teamId !== undefined) {
		const installation = await installationStore.get(installQuery.teamId);
		return installation as unknown as Installation<"v1" | "v2", boolean>;
	}
	throw new Error("Failed fetching installation");
};

export const deleteInstallation = async (installQuery: InstallationQuery<boolean>) => {
	if (installQuery.isEnterpriseInstall && installQuery.enterpriseId !== undefined)
		return await installationStore.delete(installQuery.enterpriseId);

	if (installQuery.teamId !== undefined) return await installationStore.delete(installQuery.teamId);

	throw new Error("Failed to delete installation");
};
