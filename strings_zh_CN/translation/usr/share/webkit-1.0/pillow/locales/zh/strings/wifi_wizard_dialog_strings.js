
/**
 * The available three-button dialog layouts are:
 *
 * BUTTON_LAYOUT_NORMAL:
 *   Lay the buttons out horizontally, with each having equal width.
 *
 * BUTTON_LAYOUT_STACKED:
 *   Put the middle button up above the other two.
 *
 * BUTTON_LAYOUT_AUTO:
 *   Like BUTTON_LAYOUT_STACKED when the device is in portrait.
 *   In landscape, the buttons are laid out horizontally, but the middle button
 *   uses half of the available width.
 */

var WifiWizardDialogStringTable = {
    passwordDialogButtonLayout        : BUTTON_LAYOUT_STACKED,
    cancelSetUpTryAgainButtonLayout   : BUTTON_LAYOUT_STACKED,
    cancelEnterAgainSetUpButtonLayout : BUTTON_LAYOUT_STACKED,
    title                   : "WiFi 网络（{numNetworks}）",
    advancedOptionsTitle    : "高级选项",
    manualEntryButton       : "连接其他 WiFi 网络",
    networkNameLabel        : "网络名称",
    identityLabel           : "用户名",
    passwordLabel           : "密码",
    connectionTypeLabel     : "连接类型",
    ipAddressLabel          : "IP 地址",
    subnetMaskLabel         : "子网掩码",
    routerLabel             : "路由器",
    dnsLabel                : "DNS",
    securityTypeLabel       : "安全类型",
    wpaTypeLabel            : "版本",
    eapMethodLabel          : "EAP 方法",
    phase2AuthLabel         : "双重验证",
    caCertLabel             : "CA 证书",
    connectionTypeDhcp      : "DHCP",
    conenctionTypeStatic    : "静态",
    wpaTypePersonal         : "个人",
    wpaTypeEnterprise       : "企业",
    eapMethodPeap           : "PEAP",
    eapMethodTtls           : "TTLS",
    phase2AuthPap           : "PAP",
    phase2AuthMschapv2      : "MSCHAPv2",
    securityTypeOpen        : "无",
    securityTypeWep         : "WEP",
    securityTypeWpawpa2     : "WPA/WPA2",
    securityTypeWpa2        : "WPA2",
    done                    : "完成",
    availNetworksLabel      : "可用网络",
    disconnect              : "断开连接",
    enterAgain              : "再次连接",
    setUp                   : "设置",
    okay                    : "确定",
    cancel                  : "取消",
    connect                 : "连接",
    wpsConnect              : "WPS",
    advanced                : "高级",
    join                    : "其他…",
    rescan                  : "重新扫描",
    tryAgain                : "重试",
    passwordHide            : "隐藏密码",
    manualEntryTitle        : "连接 WiFi 网络",
    passwordEntryTitle      : "要求 WiFi 密码",
    loginTitle              : "WiFi 登录",
    passwordErrorTitle      : "密码有误",
    defaultErrorTitle       : "WiFi 错误",
    defaultError            : '无法将您的 Kindle 连接到 WiFi 网络“{essid}”。 --“{error}”--。点击【设置】选项再次输入密码，或者手动设置您的网络。如果您在连接 Kindle 至 WiFi 网络时遇到问题，请联系 Kindle 客服（www.kindle.com/support）以获取帮助。',
    passwordFailedError     : '无法将您的 Kindle 连接到 WiFi 网络“{essid}”。您输入的密码有误。请重新输入或者手动设置您的网络。如果您在连接 Kindle 至 WiFi 网络时遇到问题，请联系 Kindle 客服（www.kindle.com/support）以获取帮助。',
    noProfileTitle     : '尚未配置 WiFi',
    noProfileError          : '无法将您的 Kindle 连接到 WiFi 网络，该网络尚未配置。如果您在连接 Kindle 至 WiFi 网络时遇到问题，请联系 Kindle 客服（www.kindle.com/support）以获取帮助。',
    failedToConnectError    : '无法将您的 Kindle 连接到 WiFi 网络“{essid}”。点击【设置】再次输入密码，或者手动设置您的网络。如果您在连接 Kindle 至 WiFi 网络时遇到问题，请联系 Kindle 客服（www.kindle.com/support）以获取帮助。',
    failedToConnectEnterpriseError : '您的 Kindle 无法连接到 WiFi 网络“{essid}”。请检查您的证书或联络您的系统管理员。',
    wifiNotReady            : '无法将您的 Kindle 连接到 WiFi 网络“{essid}”。请点击【主页】键，重新连接到 WiFi 网络。如果您在连接 Kindle 至 WiFi 网络时遇到问题，请联系 Kindle 客服（www.kindle.com/support）以获取帮助。',
    localNetworkFailedError : '无法将您的 Kindle 连接到本地网络“{essid}”，您可能需要检查您的本地网络。如果您在连接 Kindle 至 WiFi 网络时遇到问题，请联系 Kindle 客服（www.kindle.com/support）以获取帮助。',
    internetConnectFailedTitle : '连接失败',
    internetConnectFailedError : '您的 Kindle 已连接到 WiFi 网络但无法连接到互联网。请联系您的互联网服务提供商以获取进一步帮助。',
    profNetNameTooLongFailedTitle : '网络名称过长',
    profNetNameTooLongFailedError : '无法将您的 Kindle 连接到 WiFi 网络“{essid}”。网络名称过长，是否希望手动设置该网络？',
    passwordTooLongTitle    : '密码过长',
    passwordTooLongError    : '无法将您的 Kindle 连接到 WiFi 网络“{essid}”，您输入的密码位数超过了 WiFi 网络允许的长度。请重新输入密码。如果您在连接 Kindle 至 WiFi 网络时遇到问题，请联系 Kindle 客服（www.kindle.com/support）以获取帮助。',
    passwordTooShortTitle   : '密码过短',
    passwordTooShortError   : '无法将您的 Kindle 连接到 WiFi 网络“{essid}”，您输入的密码少一个或多个字符。请重新输入密码。如果您在连接 Kindle 至 WiFi 网络时遇到问题，请联系 Kindle 客服（www.kindle.com/support）以获取帮助。',
    wpaEnterpriseErrorTitle : '网络不支持',
    wpaEnterpriseNotSupportedError : '无法将您的 Kindle 连接到 WiFi 网络“{essid}”。Kindle 不支持企业级 WiFi 网络，请尝试连接到其他网络。如果您在连接 Kindle 至 WiFi 网络时遇到问题，请联系 Kindle 客服（www.kindle.com/support）以获取帮助。',    
    wpaEnterpriseAuthError  : '您的 Kindle不能连接到 WiFi 网络 “{essid}”。请尝试再次输入您的用户名和密码。将您的 Kindle 连接到 WiFi 时碰到任何问题，请联系 Kindle 客服（www.kindle.com/support）以获取帮助。',
    securityMismatchTitle   : '安全错误',
    securityMismatchError   : '无法将您的 Kindle 连接到 WiFi 网络 "{essid}"，您输入的安全类型与 WiFi 网络的安全类型不匹配。请重新手动设置网络，并选择正确的安全类型。如果您在连接 Kindle 至 WiFi 网络时遇到问题，请联系 Kindle 客服（www.kindle.com/support）以获取帮助。',
    adhocNotSupportedTitle  : '网络不支持',
    adhocNotSupportedError  : '无法将您的 Kindle 连接到 WiFi 网络“{essid}”。Kindle 不支持端到端 WiFi 网络，请尝试连接到其他网络。如果您在连接 Kindle 至 WiFi 网络时遇到问题，请联系 Kindle 客服（www.kindle.com/support）以获取帮助。',
    profileFailedError      : '无法设置 WiFi 网络“{essid}”，您输入的网络信息不完整。请检查网络配置，尝试重新设置网络。如果您在连接 Kindle 至 WiFi 网络时遇到问题，请联系 Kindle 客服（www.kindle.com/support）以获取帮助。',
    profileDeleteTitle      : '错误',
    profileDeleteError      : '无法删除 WiFi 网络“{essid}”的配置文件。',
    scanningForNetwork      : "正在扫描网络",
    scanComplete            : "扫描完毕",
    connecting              : "连接中",
    connected               : "已连接",
    connectionFailed        : "连接失败",
    noWifiFound             : "没有发现 WiFi 网络",
    wpsConnectionError      : '无法使用 WPS 将您的 Kindle 连接到 WiFi 网络“{essid}”，是否手动设置该网络？',
    wpsButtonNotPressedError : '无法使用 WPS 将您的 Kindle 连接到 WiFi 网络“{essid}”，请确认已点击【WPS】。',
    apRejectedError         : '无法将您的 Kindle 连接到 WiFi 网络“{essid}”。请确保您的安全设置正确无误，然后重试。',
    apDeniedError           : '您的 Kindle 无法连接到 WiFi 网络“{essid}”，接入点拒绝了您的连接请求。请检查路由器的 MAC 地址过滤规则，然后重试。',
    forgetProfileTitle      : '忽略网络？',
    forgetProfileConfirmation : '是否确定忽略 WiFi 网络“{essid}”？',
    forget                  : "忽略",
    advancedDialogDescription : "您可以为以下网络设置 WiFi 网络连接和安全选项。",
    caCertificateNotFoundTitle : "无法找到证书",
    caCertificateNotFoundError : '无法找到安全证书，请确认证书名称正确，然后重试。 '
};