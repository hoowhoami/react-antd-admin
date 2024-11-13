import type { ThemeType } from "#src/store";
import type { InputNumberProps } from "antd";

import { FollowSystemIcon, MoonIcon, SunIcon } from "#src/icons";
import { $t } from "#src/locales";
import { usePreferencesStore } from "#src/store";

import { cn } from "#src/utils";
import { InputNumber, Slider } from "antd";
import { useTranslation } from "react-i18next";

import { SwitchItem } from "../../switch-item";

const themePresets = [
	{
		name: $t("preferences.theme.light"),
		icon: <SunIcon className="text-xl" />,
		type: "light",
	},
	{
		name: $t("preferences.theme.dark"),
		icon: <MoonIcon className="text-xl" />,
		type: "dark",
	},
	{
		name: $t("preferences.theme.followSystem"),
		icon: <FollowSystemIcon className="text-xl" />,
		type: "auto",
	},
] as const;

export function SiteTheme() {
	const { t } = useTranslation();
	const {
		theme,
		colorBlindMode,
		colorGrayMode,
		themeRadius,
		changeSiteTheme,
		setPreferences,
	} = usePreferencesStore();

	function handleClick(value: ThemeType) {
		changeSiteTheme(value);
	}

	const handleChange: InputNumberProps["onChange"] = (newValue) => {
		setPreferences("themeRadius", newValue!);
	};

	return (
		<>
			<ul className="flex justify-between w-full gap-3 p-0 m-0 list-none">
				{
					themePresets.map(item => (
						<li
							className="cursor-pointer"
							key={item.type}
							onClick={() => handleClick(item.type)}
						>
							<dl className="mb-0">
								<dd
									className={cn(
										"relative py-4 px-10 outline outline-1 outline-gray-300 rounded-md",
										"before:content-[''] before:absolute before:left-1/2 before:top-1/2 before:h-0 before:w-0 before:rounded-sm before:opacity-0 before:outline before:outline-2 before:outline-transparent",
										item.type === theme ? "" : "before:transition-all before:duration-300",
										item.type === theme ? "" : "before:hover:outline-blue-600 before:hover:left-0 before:hover:top-0 before:hover:h-full before:hover:w-full before:hover:p-1 before:hover:opacity-100",
										{ "outline-2 outline-blue-600": item.type === theme },
									)}
								>
									{item.icon}
								</dd>

								<dt className="mt-2.5 flex gap-1 justify-center text-xs opacity-90">
									<span className="">{item.name}</span>
								</dt>
							</dl>
						</li>
					))
				}
			</ul>

			<SwitchItem
				name="colorBlindMode"
				checked={colorBlindMode}
				onChange={(name, value) => setPreferences(name, value)}
			>
				{t("preferences.theme.colorBlindMode")}
			</SwitchItem>
			<SwitchItem
				name="colorGrayMode"
				checked={colorGrayMode}
				onChange={(name, value) => setPreferences(name, value)}
			>
				{t("preferences.theme.grayMode")}
			</SwitchItem>
			<div className="w-full px-2 flex justify-between">
				<span className="flex items-center text-sm">
					{t("preferences.theme.radius")}
				</span>
				<div className="w-1/3">
					<Slider
						rootClassName="w-full"
						min={0}
						max={16}
						onChange={handleChange}
						value={themeRadius}
					/>
				</div>
				<div>
					<InputNumber
						className="ml-4"
						min={0}
						max={16}
						value={themeRadius}
						onChange={handleChange}
					/>
				</div>
			</div>

		</>
	);
}
