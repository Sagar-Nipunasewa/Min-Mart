import {ConfigProvider} from "antd";
import {StyleProvider} from "@ant-design/cssinjs";
import {PropsWithChildren} from "react";
import {AntdConfigProviderProps} from "../../../types";

export default function AntdConfigProvider({
                                               children,
                                               buttonBg,
                                               buttonHoverBg,
                                               buttonBorderColor,
                                               buttonShadow,
                                               buttonColor,
                                               buttonHoverColor,
                                               buttonHoverBorderColor,
                                               menuDarkItemHoverBg,
                                               menuDarkItemSelectedBg,
                                               menuIconMarginInlineEnd,
                                               menuDarkItemColor,
                                               menuCollapsedIconSize,
                                               menuItemMarginBlock,
                                               menuDarkItemBg,
                                               menuCollapsedWidth,
                                               menuItemMarginInline
                                           }: PropsWithChildren<AntdConfigProviderProps>) {
    return (
        <ConfigProvider
            wave={{disabled: true}}
            theme={{
                components: {
                    Button: {
                        defaultBg: buttonBg,
                        defaultHoverBg: buttonHoverBg,
                        defaultBorderColor: buttonBorderColor,
                        defaultShadow: buttonShadow,
                        defaultColor: buttonColor,
                        defaultHoverColor: buttonHoverColor,
                        defaultHoverBorderColor: buttonHoverBorderColor,
                    },
                    Menu: {
                        darkItemBg: menuDarkItemBg,
                        darkItemHoverBg: menuDarkItemHoverBg,
                        darkItemSelectedBg: menuDarkItemSelectedBg,
                        iconMarginInlineEnd: menuIconMarginInlineEnd,
                        darkItemColor: menuDarkItemColor,
                        collapsedIconSize: menuCollapsedIconSize,
                        itemMarginBlock: menuItemMarginBlock,
                        collapsedWidth: menuCollapsedWidth,
                        itemMarginInline: menuItemMarginInline,
                    },
                },
            }}
        >
            <StyleProvider hashPriority="high">{children}</StyleProvider>
        </ConfigProvider>
    )
}
