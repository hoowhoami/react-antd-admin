import type { RoleItemType } from "#src/api/system";
import type { ProColumns } from "@ant-design/pro-components";
import type { TFunction } from "i18next";

import { Tag } from "antd";

export function getConstantColumns(t: TFunction<"translation", undefined>): ProColumns<RoleItemType>[] {
	return [
		{
			dataIndex: "index",
			title: t("common.index"),
			valueType: "index",
			width: 50,
		},
		{
			title: t("system.role.name"),
			dataIndex: "name",
			disable: true,
			ellipsis: true,
			minWidth: 120,
			formItemProps: {
				rules: [
					{
						required: true,
						message: t("form.required"),
					},
				],
			},
		},
		{
			disable: true,
			title: t("system.role.id"),
			dataIndex: "code",
			minWidth: 120,
			filters: true,
			onFilter: true,
			ellipsis: true,
		},
		{
			disable: true,
			title: t("common.status"),
			dataIndex: "status",
			valueType: "select",
			minWidth: 80,
			render: (text, record) => {
				return <Tag color={record.status === 1 ? "success" : "default"}>{text}</Tag>;
			},
			valueEnum: {
				1: {
					text: t("common.enabled"),
				},
				0: {
					text: t("common.deactivated"),
				},
			},
		},
		{
			title: t("common.remark"),
			dataIndex: "remark",
			search: false,
			minWidth: 100,
		},
		{
			title: t("common.createTime"),
			dataIndex: "createTime",
			valueType: "date",
			minWidth: 100,
			search: false,
		},
		{
			title: t("common.updateTime"),
			dataIndex: "updateTime",
			valueType: "dateTime",
			minWidth: 170,
			search: false,
		},
	];
}
