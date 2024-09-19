
function Gc() {
    React.useEffect(() => {
        const audio = document.getElementById('jiji');
        const lis = document.querySelectorAll('ul.jiji li');
        lis.forEach(li => {
            li.onclick = function () {
                audio.src = '/assets/share/music/jj/' + this.getAttribute('m') + '.ogg';
                audio.play();
            }
        });
        document.querySelector('.s1').onclick = function () {
            audio.currentTime = 0;
        };
        document.querySelector('.s2').onclick = function () {
            audio.pause();
        }
    }, [])
    return (
        <div className="jj-box">
            <div className="jj-music-box">
                <div className="gongneng">
                    <span>音乐区域</span>
                    <div className="s">
                        <div className="s1">开头</div>
                        <div className="s2">停止</div>
                    </div>
                </div>
                <ul className="jiji">
                    <li m="yhhmgn">amagi</li>
                    <li m="esj">二手鸡</li>
                    <li m="rup">rap鸡</li>
                    <li m="djj">DJ鸡</li>
                    <li m="xxj">谢谢鸡</li>
                    <li m="jhj">惊魂鸡</li>
                    <li m="xjj">仙剑鸡</li>
                    <li m="xnj">新年鸡</li>
                    <li m="zdj">战斗鸡</li>
                    <li m="thj">桃花鸡</li>
                    <li m="mrj">某人鸡</li>
                    <li m="jnj">江南鸡</li>
                    <li m="jjj">尖叫鸡</li>
                    <li m="bbj">baby鸡</li>
                    <li m="hxj">欢喜鸡</li>
                    <li m="yyj">耶耶鸡</li>
                    <li m="jtm">鸡太美</li>
                    <li m="大悲鸡">大悲鸡</li>
                    <li m="果宝鸡">果宝鸡</li>
                    <li m="狂放鸡">狂放鸡</li>
                    <li m="起鲲了">起坤了</li>
                    <li m="青蛙鸡">青蛙鸡</li>
                    <li m="三国鸡">三国鸡</li>
                    <li m="小母鸡">小母鸡</li>
                    <li m="新闻鸡">新闻鸡</li>
                    <li m="印度鸡">印度鸡</li>
                    <li m="各种鸡">各种鸡</li>
                    <li m="卡点鸡">卡点鸡</li>
                    <li m="听鸡话">听鸡话</li>
                    <li m="祝福鸡">祝福鸡</li>
                    <li m="好运鸡">好运鸡</li>
                    <li m="春节鸡">春节鸡</li>
                    <li m="圣诞鸡">圣诞鸡</li>
                </ul>
                <audio id="jiji" src="/assets/share/music/jj/j.ogg" ontrolslist="nodownload" οncοntextmenu="return false" preload="auto"></audio>
            </div>
            <div className="jj-banner-box">
                <div className="jj-banner-bg">
                    
                </div>
                <div className="img-jj">

                </div>
            </div>
            
        </div>
    )
};

const gc_boxs = ReactDOM.createRoot(document.getElementById('gc-box'));
gc_boxs.render(<Gc />);