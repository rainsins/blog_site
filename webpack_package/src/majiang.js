import React from 'react';
import { createRoot } from 'react-dom/client';
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json())

function Majiang() {
    const { data, error, isLoading } = useSWR("/assets/post/majiang/config.json", fetcher)

    if (error) swal("我的服务器崩啦，我的博客好多图片都显示不了啦");

    if (isLoading) return (<div className='majiang-loading'><img src='https://pan.rainsin.cn:2000/d/blog/img/post/majiang/%E9%BA%BB%E5%B0%86.gif'></img></div>);

    const mjdata = data.map((e, i) => {
        const showclassdata = e.map((ele, index) => {
            console.log(ele);
            const img1 = `https://mj.rainsin.cn:2000/${ele["牌型"]}?country=cn`;
            const img2 = `https://mj.rainsin.cn:2000/${ele["听张"]}?country=cn`;

            return (
                <>
                    <hr></hr>
                    <h3>{`听牌类型：${ele["听牌名称"]}`}</h3>
                    <h4>牌型：</h4>
                    <img className='ma-img' src={img1}></img>

                    <h4>听张：</h4>
                    <img className='ma-img' src={img2}></img>
                </>
            );
        });

        const str = `听${i + 1}张`;

        return (
            <>
                <h2>{str}</h2>
                {showclassdata}
            </>
        );
    });

    return (
        <>
            {mjdata}
        </>
    );
}

const root = createRoot(document.getElementById('majiang-box'));
root.render(<Majiang />);
