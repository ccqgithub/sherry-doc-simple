文档模板
==


这是一级标题
===

## 1\. 这是二级标题

### 1.1 这是三级标题

#### 1.1.1 这是四级标题

##### 1.1.1.1 这是五级标题

###### 1.1.1.1.1 这是六级标题


有序列表1: 分段
--

1.  是地方都是

2.  是地方都是

3.  是地方都是


有序列表2： 不分段
--

1.  是地方都是
2.  是地方都是
3.  是地方都是


无序列表: 分段
--

*   是地方都是

*   是地方都是

*   是地方都是


无序列表: 不分段
--

*   \- 是地方都是,可以手动换行<br />fsdlfdslflds
*   \- 是地方都是
*   \- 是地方都是


段落
--

这是一个段落 **我加粗强调**


引用
--

>   引用
>   引用


一段引用
--

>   一段引用一段引用一段引用一段引用一段引用
    一段引用一段引用一段引用一段引用一段引用一段引用


文章链接
--

[我是一个文章链接](article::article/faq/firmware.md)


图片
--

我是一张图片
![图片名](image::image/2.jpg)


简单表格
--

| 配置项 | 说明 |
| :------: | -------: |
| 动态（自动获取）  |   缺省配置。又叫DHCP方式，需要设备上层网络中有DHCP server分配IP地址。| 
| 静态（固定IP）    | 通过手工设置IP地址，掩码，网关的方式接入网络 | 
| PPPOE（ADSL） | 通过PPPoE拨号方式上网，一般需要由运营商提供账号密码 | 


复杂表格
--

<table>
    <tr>
        <td width="20%">
            硬件规格
        </td>
        <td class="td-table">
            <table>
                <tr>
                    <td width="50%">WAN/POE口</td>
                    <td>POE供电<br />
                        1个，10M/100M自适应RJ45端口
                    </td>
                </tr>
                <tr>
                    <td width="50%">LAN口</td>
                    <td>2个，10M/100M自适应RJ45端口
                    </td>
                </tr>
                <tr>
                    <td width="50%">Reset按键</td>
                    <td>1个，长按5秒，系统恢复出厂默认值
                    </td>
                </tr>
                <tr>
                    <td width="50%">LED</td>
                    <td>三色灯（红黄蓝）
                    </td>
                </tr>
                <tr>
                    <td width="50%">天线</td>
                    <td>2个，可拆卸天线，双频5dBi
                    </td>
                </tr>
                <tr>
                    <td width="50%">POE供电电压</td>
                    <td>18V/1A
                    </td>
                </tr>
                <tr>
                    <td width="50%">平均功耗</td>
                    <td>6.89W
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td width="20%">
            软件规格
        </td>
        <td class="td-table">
            <table>
                <tr>
                    <td width="50%">无线模式</td>
                    <td>802.11b / 11g / 11bg / 11bgn
802.11a / 11an / 11ac/an / 11ac/an/a

                    </td>
                </tr>
                <tr>
                    <td width="50%">频率</td>
                    <td>2.4G/5.8G
                    </td>
                </tr>
                <tr>
                    <td width="50%">传输速率</td>
                    <td>无线速率最高可达867Mbps
                    </td>
                </tr>
                <tr>
                    <td width="50%">数据加密</td>
                    <td>支持WPAPSK2 加密方式
                    </td>
                </tr>
                <tr>
                    <td width="50%">发射功率</td>
                    <td>20dBm(Max)
                    </td>
                </tr>
                
            </table>
        </td>
    </tr>
    <tr>
        <td width="20%">
            物理规格
        </td>
        <td class="td-table">
            <table>
                <tr>
                    <td width="50%">尺寸</td>
                    <td>约199(L)*199(W)*34(H)mm
                    </td>
                </tr>
                <tr>
                    <td width="50%">重量</td>
                    <td>约398g
                    </td>
                </tr>
                
                
            </table>
        </td>
    </tr>
    <tr>
        <td width="20%">
            环境
        </td>
        <td class="td-table">
            <table>
                <tr>
                    <td width="50%">工作温度</td>
                    <td>0~40℃
                    </td>
                </tr>
                <tr>
                    <td width="50%">存储温度</td>
                    <td>-10~70℃
                    </td>
                </tr>
                <tr>
                    <td width="50%">工作湿度</td>
                    <td>10%~90%RH无凝结
                    </td>
                </tr>
                <tr>
                    <td width="50%">存储湿度</td>
                    <td>5%~90%RH无凝结
                    </td>
                </tr>
               
            </table>
        </td>
    </tr>
    <tr>
        <td width="20%">
            认证
        </td>
        <td>
            3C、SRRC
        </td>
    </tr>
</table>