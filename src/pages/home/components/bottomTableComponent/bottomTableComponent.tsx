import { Table } from "antd";
import { useContext } from "react";
import { shopSimplePLContext } from "../../context";
import "./bottomTableComponent.less";

export default () => {
  const { bottomTableConfig } = useContext(shopSimplePLContext);

  // 动态遍历生成
  const newDiv = (record: any, classStyle: string) => {
    return record.map((item: any) => (
      <div key={item.id} className={classStyle}>
        {item.name}
      </div>
    ));
  };

  const columns: any = [
    {
      title: "店舗コード",
      dataIndex: "1",
      key: "1",
      width: 130,
      fixed: "left",
      align: "center",
    },
    {
      title: "店舗名",
      dataIndex: "2",
      key: "2",
      width: 130,
      fixed: "left",
      align: "center",
      render: (record: any) => <span className="title_style">{record}</span>,
    },
    {
      title: "項目",
      dataIndex: "3",
      key: "3",
      width: 100,
      fixed: "left",
      align: "center",
      render: (record: any) => <>{newDiv(record, "table_tr_border")}</>,
    },
    {
      title: "単月",
      children: [
        {
          title: "売上高合",
          align: "center",
          dataIndex: "4",
          key: "4",
          width: 100,
          render: (record: any) => <>{newDiv(record, "table_tr_border_two")}</>,
        },
        {
          title: "荒利益高",
          dataIndex: "5",
          key: "5",
          width: 100,
          align: "center",
          render: (record: any) => <>{newDiv(record, "table_tr_border_two")}</>,
        },
        {
          title: "営業収益",
          dataIndex: "6",
          key: "6",
          width: 100,
          align: "center",
          render: (record: any) => <>{newDiv(record, "table_tr_border_two")}</>,
        },
        {
          title: "営業荒利",
          dataIndex: "7",
          key: "7",
          width: 100,
          align: "center",
          render: (record: any) => <>{newDiv(record, "table_tr_border_two")}</>,
        },
        {
          title: "営業人件",
          dataIndex: "8",
          key: "8",
          width: 100,
          align: "center",
          render: (record: any) => <>{newDiv(record, "table_tr_border_two")}</>,
        },
        {
          title: "営業販促",
          dataIndex: "9",
          key: "9",
          width: 100,
          align: "center",
          render: (record: any) => <>{newDiv(record, "table_tr_border_two")}</>,
        },
        {
          title: "販売雑費",
          dataIndex: "10",
          key: "10",
          width: 100,
          align: "center",
          render: (record: any) => <>{newDiv(record, "table_tr_border_two")}</>,
        },
        {
          title: "営業設備",
          dataIndex: "11",
          key: "11",
          width: 100,
          align: "center",
          render: (record: any) => <>{newDiv(record, "table_tr_border_two")}</>,
        },
        {
          title: "営業一般",
          dataIndex: "12",
          key: "12",
          width: 100,
          align: "center",
          render: (record: any) => <>{newDiv(record, "table_tr_border_two")}</>,
        },
        {
          title: "店舗経費",
          dataIndex: "13",
          key: "13",
          width: 100,
          align: "center",
          render: (record: any) => <>{newDiv(record, "table_tr_border_two")}</>,
        },
        {
          title: "店舗利益",
          dataIndex: "14",
          key: "14",
          width: 100,
          align: "center",
          render: (record: any) => <>{newDiv(record, "table_tr_border_two")}</>,
        },
      ],
    },
    {
      title: "累計",
      children: [
        {
          title: "売上高合",
          dataIndex: "15",
          key: "15",
          align: "center",
          width: 100,
          render: (record: any) => <>{newDiv(record, "table_tr_border_two")}</>,
        },
        {
          title: "荒利益高",
          dataIndex: "16",
          key: "16",
          align: "center",
          width: 100,
          render: (record: any) => <>{newDiv(record, "table_tr_border_two")}</>,
        },
        {
          title: "営業収益",
          dataIndex: "17",
          key: "17",
          align: "center",
          width: 100,
          render: (record: any) => <>{newDiv(record, "table_tr_border_two")}</>,
        },
        {
          title: "営業荒利",
          dataIndex: "18",
          key: "18",
          align: "center",
          width: 100,
          render: (record: any) => <>{newDiv(record, "table_tr_border_two")}</>,
        },
        {
          title: "営業人件",
          dataIndex: "19",
          key: "19",
          align: "center",
          width: 100,
          render: (record: any) => <>{newDiv(record, "table_tr_border_two")}</>,
        },
        {
          title: "営業販促",
          dataIndex: "20",
          key: "20",
          align: "center",
          width: 100,
          render: (record: any) => <>{newDiv(record, "table_tr_border_two")}</>,
        },
        {
          title: "販売雑費",
          dataIndex: "21",
          key: "21",
          align: "center",
          width: 100,
          render: (record: any) => <>{newDiv(record, "table_tr_border_two")}</>,
        },
        {
          title: "営業設備",
          dataIndex: "22",
          key: "22",
          align: "center",
          width: 100,
          render: (record: any) => <>{newDiv(record, "table_tr_border_two")}</>,
        },
        {
          title: "営業一般",
          dataIndex: "23",
          key: "23",
          align: "center",
          width: 100,
          render: (record: any) => <>{newDiv(record, "table_tr_border_two")}</>,
        },
        {
          title: "店舗経費",
          dataIndex: "24",
          key: "24",
          align: "center",
          width: 100,
          render: (record: any) => <>{newDiv(record, "table_tr_border_two")}</>,
        },
        {
          title: "店舗利益",
          dataIndex: "25",
          key: "25",
          align: "center",
          width: 100,
          render: (record: any) => <>{newDiv(record, "table_tr_border_two")}</>,
        },
      ],
    },
  ];

  return (
    <div className="table_border_display" style={{ width: "100vm" }}>
      <Table
        rowKey={"id"}
        columns={columns}
        dataSource={bottomTableConfig.bottomTableData}
        bordered
        pagination={false}
        scroll={{ x: "max-content", y: "calc(100vh - 260px)" }}
        onRow={(record, index) => ({
          onClick: () => bottomTableConfig.clickShopGo(record, index), // 设置行点击回调
        })}
      />
    </div>
  );
};
