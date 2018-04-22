import React from "react";
import styled from "styled-components";
import * as ReactTabs from "react-tabs";

const Tabs = ({ model }) => {
  const tabList = model.map(it => {
    return <Tab key={it.id}>{it.title}</Tab>;
  });

  const panels = model.map(it => {
    const PanelComponent = it.panel;
    return (
      <TabPanel key={it.id}>
        <PanelComponent />
      </TabPanel>
    );
  });

  return (
    <TabsContainer>
      <TabList>{tabList}</TabList>
      {panels}
    </TabsContainer>
  );
};

const TabsContainer = styled(ReactTabs.Tabs)``;

Tabs.tabsRole = "Tabs";

const TabList = styled(ReactTabs.TabList)`
  display: flex;
`;

TabList.tabsRole = "TabList";

const Tab = styled(ReactTabs.Tab).attrs({
  selectedClassName: "selected"
})`
  height: 38px;
  line-height: 38px;
  padding: 0 16px;
  margin: 0 8px;
  cursor: pointer;
  background: var(--color-black-alpha-3);
  color: var(--color-white);
  border-radius: 8px;
  &.selected {
    font-weight: 700;
    background: var(--color-black-alpha-2);
  }
`;

Tab.tabsRole = "Tab";

const TabPanel = ({ children, ...rest }) => {
  return (
    <ReactTabs.TabPanel {...rest}>
      <TabPanelWrapper>{children}</TabPanelWrapper>
    </ReactTabs.TabPanel>
  );
};

TabPanel.tabsRole = "TabPanel";

const TabPanelWrapper = styled.div`
  margin-top: 32px;
`;

export default Tabs;
