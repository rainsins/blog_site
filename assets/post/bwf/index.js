
function Chart() {
    return (
        <table width="95%" border="0" cellspacing="4" cellpadding="4" style="margin:0 auto">
<tbody><tr>
  <td align="center" className="smalltext" valign="bottom" title="常指手上技术细腻度，控球能力">

<div style="width:20px;text-align:center;background:#eee;height:120px;position:relative" className="radius2"><div style="width:100%;text-align:center;background:#7CB5EC;height:117.6px;position:absolute; bottom:0;" className="radius2"></div></div>手法<br/><span style="color:#7CB5EC">4.9</span>
  </td>
  
  <td align="center" className="smalltext" valign="bottom" title="脚步跑动能力及协调性等步伐技术合理性使用">

<div style="width:20px;text-align:center;background:#eee;height:120px;position:relative" className="radius2"><div style="width:100%;text-align:center;background:#FF9933;height:120px;position:absolute; bottom:0;" className="radius2"></div></div>步法<br/><span style="color:#FF9933">5</span>
  </td>
  
  <td align="center" className="smalltext" valign="bottom" title="战术意识能力，场上预判力及善于根据不同对手使用不同战术策略">

<div style="width:20px;text-align:center;background:#eee;height:120px;position:relative" className="radius2"><div style="width:100%;text-align:center;background:#FF9933;height:120px;position:absolute; bottom:0;" className="radius2"></div></div>战术<br/><span style="color:#FF9933">5</span>
  </td>
  
  <td align="center" className="smalltext" valign="bottom" title="指上肢、下肢腰部等身体肌肉部位的力量，爆发力等">

<div style="width:20px;text-align:center;background:#eee;height:120px;position:relative" className="radius2"><div style="width:100%;text-align:center;background:#FF9933;height:120px;position:absolute; bottom:0;" className="radius2"></div></div>力量<br/><span style="color:#FF9933">5</span>
  </td>
  
  <td align="center" className="smalltext" valign="bottom" title="场上移动速度、跑动连贯性能力">

<div style="width:20px;text-align:center;background:#eee;height:120px;position:relative" className="radius2"><div style="width:100%;text-align:center;background:#7CB5EC;height:117.6px;position:absolute; bottom:0;" className="radius2"></div></div>速度<br/><span style="color:#7CB5EC">4.9</span>
  </td>
  
  <td align="center" className="smalltext" valign="bottom" title="身体耐力、负荷能力及抗压能力">

<div style="width:20px;text-align:center;background:#eee;height:120px;position:relative" className="radius2"><div style="width:100%;text-align:center;background:#FF9933;height:120px;position:absolute; bottom:0;" className="radius2"></div></div>体能<br/><span style="color:#FF9933">5</span>
  </td>
  
  <td align="center" className="smalltext" valign="bottom" title="进攻能力，如扣杀、扑球等组织进攻威胁度及成功率">

<div style="width:20px;text-align:center;background:#eee;height:120px;position:relative" className="radius2"><div style="width:100%;text-align:center;background:#FF9933;height:120px;position:absolute; bottom:0;" className="radius2"></div></div>进攻<br/><span style="color:#FF9933">5</span>
  </td>
  
  <td align="center" className="smalltext" valign="bottom" title="防守能力，常指如接杀球，被动球处理的成功率和反被动为主动能力">

<div style="width:20px;text-align:center;background:#eee;height:120px;position:relative" className="radius2"><div style="width:100%;text-align:center;background:#7CB5EC;height:117.6px;position:absolute; bottom:0;" className="radius2"></div></div>防守<br/><span style="color:#7CB5EC">4.9</span>
  </td>
  
  <td align="center" className="smalltext" valign="bottom" title="心理素质，心态稳定度，关键分把控、临场应变及临场发挥的能力">

<div style="width:20px;text-align:center;background:#eee;height:120px;position:relative" className="radius2"><div style="width:100%;text-align:center;background:#FF9933;height:120px;position:absolute; bottom:0;" className="radius2"></div></div>心理<br/><span style="color:#FF9933">5</span>
  </td>
  
</tr>
  </tbody></table>
    )
}

const chart_boxs = ReactDOM.createRoot(document.getElementById('imagine'));
chart_boxs.render(<Chart />);