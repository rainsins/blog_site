
function LinksBg() {
    const arr = new Array(13).fill('0');

    const item = arr.map((e, i) => {
        const tr = {
            transform: `rotate(${Math.random() > 0.5 ? '-' : ''}${Math.floor(Math.random() * 6)}deg)`
        };
        return (
            <div className="card" style={{ tr }}><img src={`https://pan.rainsin.cn:2000/d/blog/img/post/%E5%8D%81%E4%BA%8C%E6%A2%A6_%E4%BA%AE%E7%82%B9%E6%BC%AB%E7%94%BB-%E7%AB%99%E9%85%B7ZCOOL/100${i + 1}.jpg`} />
                <h2>{i + 1}</h2>
            </div>
        );
    });

    return (
        <>
            {item}
        </>
    );
};

const linkbg_item = ReactDOM.createRoot(document.getElementById('imgbg-box'));
linkbg_item.render(<LinksBg />);
