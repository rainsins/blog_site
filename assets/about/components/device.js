const Devicedata1 = [
    {
        id: 1,
        type: "https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/img/device/cpu-tower.png",
        name: "Intel i5-9600kf",
        url: "https://www.intel.com/content/www/us/en/products/sku/190884/intel-core-i59600kf-processor-9m-cache-up-to-4-60-ghz/specifications.html"
    },
    {
        id: 2,
        type: "https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/img/device/motherboard.png",
        name: "MSI Z390M-S01",
        url: "https://www.msi.cn/Motherboard/Z390M-S01/Specification"
    },
    {
        id: 3,
        type: "https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/img/device/gpu.png",
        name: "蓝宝石 RX 570 4GB",
        url: "https://www.sapphiretech.com/zh-cn/consumer/pulse-rx-570-4g-g5_c"
    }];
const Devicedata2 = [
    {
        id: 4,
        type: "https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/img/device/ram.png",
        name: "Trident Z Neo 3600C18",
        url: "https://www.gskill.com/tw/product/203/205/1582537336/F4-3600C18D-64GTZR"
    },
    {
        id: 5,
        type: "https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/img/device/sound-card.png",
        name: "Realtek ALC892 Codec",
        url: "https://www.realtek.com/en/products/computer-peripheral-ics/item/alc892"
    },
    {
        id: 6,
        type: "https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/img/device/network-card.png",
        name: "Realtek 8111H",
        url: "https://www.realtek.com/en/products/connected-media-ics/item/rtl8111h-s-cg"
    }
];
function DeviceItem() {
    const SingDevice1 = Devicedata1.map((a, index) => {
        return (<Ditem obj={a} />)
    });
    const SingDevice2 = Devicedata2.map((a, index) => {
        return (<Ditem obj={a} />)
    });
    return (
        <div className="sing-device-box">
            <div className="sing-device-one-box">
                {SingDevice1}
            </div>
            <div className="sing-device-one-box">
                {SingDevice2}
            </div>
        </div>
    );
};

function Ditem({ obj }) {
    const style = {
        backgroundImage: `url(${obj.type})`
    };
    return (
        <div className="sing-device" data-url={obj.url} data-id={obj.id} id={`sing-device-id${obj.id}`}>
            <div className="sing-device-type" style={style} data-id={obj.id}></div>
            <div className="sing-device-name" data-id={obj.id}>
                {obj.name}
            </div>
        </div>
    );
};
const device_item = ReactDOM.createRoot(document.getElementById('device-only'));
device_item.render(<DeviceItem />);