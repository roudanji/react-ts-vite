import { date } from "@/recoil-stroe/date";
import { filterOption } from "@/utils/utils";
import { Button, DatePicker, Select, Space } from "antd";
import dayjs from "dayjs";
import { nanoid } from "nanoid";
import { useContext } from "react";
import { useRecoilValue } from "recoil";
import { shopSimplePLContext } from "../../context";
import "./topComponent.less";

export default () => {
  const { topConfig } = useContext(shopSimplePLContext);

  // 月份枚举
  const dateMonth = useRecoilValue(date);

  // 动态获取当前月份
  const getMonthLabel = () => {
    const selectedMonth = dateMonth.find(
      (month) => month.value === parseInt(topConfig.topMounth, 10),
    );
    return selectedMonth ? selectedMonth.label : null;
  };

  // 暂时模拟店铺的搜索
  const store = [
    { id: nanoid(), value: "PSP津城山", label: "PSP津城山" },
    { id: nanoid(), value: "PSP笹丘", label: "PSP笹丘" },
    { id: nanoid(), value: "PSP新瑞橋", label: "PSP新瑞橋" },
    { id: nanoid(), value: "PSPマリナタウン", label: "PSPマリナタウン" },
    { id: nanoid(), value: "TSP・PSP高萩", label: "TSP・PSP高萩" },
    { id: nanoid(), value: "PSPガーデン前橋", label: "PSPガーデン前橋" },
  ];

  return (
    <div className="top_max_box">
      <div className="left_search_box">
        <div className="form_box">
          <Space>
            <div className="mustFlag">
              年度:{" "}
              <DatePicker
                defaultValue={dayjs(topConfig.topSearchYear, "YYYY")}
                format={"YYYY"}
                picker="year"
                style={{ width: "100px" }}
              />
            </div>

            <div className="mustFlag">
              月度:&nbsp;
              <Select
                defaultValue={getMonthLabel()}
                placeholder="选择月度"
                style={{ width: "100px" }}
              >
                {dateMonth.map((item) => (
                  <Select.Option key={item.id} value={item.value}>
                    {item.label}
                  </Select.Option>
                ))}
              </Select>
            </div>

            <div style={{ marginLeft: "90px" }} className="mustFlag store_box">
              店铺:{" "}
              <Select
                allowClear
                style={{ width: "250px" }}
                showSearch
                placeholder="店舗を指定して下さい"
                optionFilterProp="children"
                onChange={topConfig.clickStoteGetValue}
                filterOption={filterOption}
                options={store}
              />
            </div>
          </Space>
        </div>
        <div className="search_button_box">
          <Button
            loading={topConfig.tableLoading}
            type="primary"
            onClick={topConfig.searchButton}
          >
            <b style={{ marginRight: "10px" }}>検</b> <b>索</b>
          </Button>
        </div>
      </div>
      <div className="right_export_box"></div>
    </div>
  );
};
