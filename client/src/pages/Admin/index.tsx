import { Box, Typography, Tabs, Tab } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import AdminGoods from "./AdminGoods";
import AdminShelves from "./AdminShelves";
import AdminBanner from "./AdminBanner";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}
  
function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Box>{children}</Box>
          </Box>
        )}
      </div>
    );
}
  
function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}
  
export const AdminPage = () => {
    const [value, setValue] = useState(0);
    const {t} = useTranslation()
  
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
  
    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange}>
                <Tab label={t('Admin.goods')} {...a11yProps(0)} />
                <Tab label={t('Admin.shelves')} {...a11yProps(1)} />
                <Tab label={t('Admin.banner')} {...a11yProps(2)} />
            </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <AdminGoods/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <AdminShelves/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <AdminBanner/>
            </CustomTabPanel>
        </Box>
    );
}
