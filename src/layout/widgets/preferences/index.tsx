import { BasicButton } from "#src/components";
import { useDeviceType, usePreferences } from "#src/hooks";
import { useAuthStore, usePreferencesStore } from "#src/store";

import { CopyOutlined, RedoOutlined, SettingOutlined } from "@ant-design/icons";
import { Badge, Divider, Drawer } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Animation, PreferencesLayout, SiteTheme, Tabbar } from "./blocks";

export function Preferences() {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);
	const { isMobile } = useDeviceType();
	const { reset, isDefault } = usePreferences();
	const preferences = usePreferencesStore();
	const logout = useAuthStore(state => state.logout);

	const clearAndLogout = async () => {
		await logout();
		usePreferencesStore.persist.clearStorage();
		navigate("/login");
	};

	const handleCopyPreferences = async () => {
		const data = JSON.stringify(preferences, null, 2);
		await navigator.clipboard.writeText(data);
		window.$modal?.success?.({
			title: t("preferences.copyPreferencesSuccessTitle"),
			content: t("preferences.copyPreferencesSuccess"),
		});
	};

	return (
		<>
			<div
				role="menuitem"
				tabIndex={-1}
				onClick={() => setIsOpen(true)}
				onKeyDown={() => { }}
				className="text-lg"
			>
				<SettingOutlined />
			</div>
			<Drawer
				title={t("common.preferences.title")}
				placement="right"
				onClose={() => {
					setIsOpen(false);
				}}
				extra={(
					<Badge
						style={{ width: 8, height: 8 }}
						dot={!isDefault}
						color="blue"
						offset={[-5, 5]}
					>
						<BasicButton
							onPointerDown={() => !isDefault && reset()}
							type="text"
							icon={<RedoOutlined rotate={270} />}
						/>
					</Badge>
				)}
				footer={(
					<div className="flex justify-between">
						<BasicButton
							icon={<CopyOutlined rotate={180} />}
							onPointerDown={handleCopyPreferences}
						>
							{t("preferences.copyPreferences")}
						</BasicButton>
						<BasicButton
							type="text"
							onPointerDown={clearAndLogout}
						>
							{t("preferences.clearAndLogout")}
						</BasicButton>
					</div>
				)}
				{...(isMobile
					? {
						width: "100vw",
					}
					: {})}
				open={isOpen}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Divider>{t("common.preferences.theme")}</Divider>
					<SiteTheme />
					<Divider>{t("preferences.layout.title")}</Divider>
					<PreferencesLayout />
					<Divider>{t("preferences.tabbar.title")}</Divider>
					<Tabbar />
					<Divider>{t("preferences.animation.title")}</Divider>
					<Animation />
				</div>
			</Drawer>
		</>
	);
}
