import type { ColProps } from "antd";
import {
	MessageOutlined,
	MoneyCollectOutlined,
	ShoppingCartOutlined,
	UserOutlined,
} from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import { useTranslation } from "react-i18next";

const { Meta } = Card;
const wrapperCol: ColProps = {
	xs: 24,
	sm: 24,
	md: 12,
	lg: 12,
	xl: 12,
	xxl: 6,
};
export default function CardList() {
	const { t } = useTranslation();
	return (
		<Row justify="space-between" gutter={[20, 20]}>
			<Col {...wrapperCol}>
				<Card>
					<Meta
						avatar={<UserOutlined style={{ fontSize: 30 }} />}
						title={t("home.newVisits")}
						description="102,400"
					/>
				</Card>
			</Col>
			<Col {...wrapperCol}>
				<Card>
					<Meta
						avatar={<MessageOutlined style={{ fontSize: 30 }} />}
						title={t("home.messages")}
						description="81,212"
					/>
				</Card>
			</Col>
			<Col {...wrapperCol}>
				<Card>
					<Meta
						avatar={<MoneyCollectOutlined style={{ fontSize: 30 }} />}
						title={t("home.purchases")}
						description="9,280"
					/>
				</Card>
			</Col>
			<Col span={6} {...wrapperCol}>
				<Card>
					<Meta
						avatar={<ShoppingCartOutlined style={{ fontSize: 30 }} />}
						title={t("home.shoppings")}
						description="13,600"
					/>
				</Card>
			</Col>
		</Row>
	);
}
