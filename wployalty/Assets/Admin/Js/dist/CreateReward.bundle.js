"use strict";(self.webpackChunkreact_wordpress=self.webpackChunkreact_wordpress||[]).push([[238],{8704:(e,t,r)=>{r.r(t),r.d(t,{default:()=>p});var a=r(6540),n=r(296),c=r(7767),i=r(5235),o=r(3112),s=r(5666);const l=function(e){var t=e.Icon,r=e.RewardType,l=e.Description,d=e.to,p=void 0===d?"":d,m=e.value,w=(0,c.Zp)(),u=a.useContext(o.Hi),x=a.useContext(o.ib),_=a.useState(!1),f=(0,n.A)(_,2),g=f[0],v=f[1];return a.useEffect((function(){(u||"points_conversion"===m)&&v(!0)}),[]),a.createElement("div",{className:"group relative flex hover:shadow-card hover:border-white  \n    transition duration-300 flex-col justify-evenly items-center \n    space-y-3 ".concat(g?"bg-white":"bg-gray-100"," border broder-light_border rounded-lg\n     px-7 py-6 w-64 ")},a.createElement((function(e){var t=e.icon;return a.createElement("div",{className:"p-4 rounded-full  bg-primary_extra_light"},a.createElement("div",{className:"h-9 w-9 font-normal text-primary flex items-center justify-center "},t))}),{icon:t}),a.createElement("h4",{className:"font-bold text-dark text-md antialiased"},r),a.createElement("p",{className:"text-14px  text-light leading-5 text-center"},l),a.createElement(s.A,{textStyle:"text-primary text-sm_14_l_20",outline:!0,bgColor:"bg-white",padding:"px-3 py-2",others:"group-hover:bg-primary group-hover:text-white transition duration-300",click:function(e){e.preventDefault(),g?w(p):window.open(i.RP)}},g?x.rewards.create_reward_text:x.common.premium),!g&&a.createElement("div",{style:{right:"12px",height:"30px"},className:"flex gap-x-2  rounded-md border group-hover:border-active_green group-hover:bg-active_light_green   border-card_border  bg-white px-2 py-1.5 top-0  items-center justify-center absolute"},a.createElement("i",{className:"wlr wlrf-lock text-sm text-light font-semibold group-hover:text-active_green "}),a.createElement("span",{className:"text-xs 2xl:text-sm  font-semibold text-light group-hover:text-active_green  "},x.common.pro_text)))};var d=r(1852);const p=function(){var e=(0,c.Zp)(),t=a.useContext(o.DC).appState,r=a.useContext(o.ib),n=[{Icon:a.createElement("div",{className:"text-primary"},a.createElement("i",{className:"wlr wlrf-points_conversion  text-4xl color-important "})),RewardType:r.rewards.create_reward.points_conversion.name,Description:r.rewards.create_reward.points_conversion.description,to:"/edit_reward/points_conversion/0",value:"points_conversion"},{Icon:a.createElement("div",{className:"text-primary"},a.createElement("i",{className:"wlr wlrf-fixed_cart text-4xl   color-important -ml-1"})),RewardType:r.rewards.create_reward.fixed_discount.name,Description:r.rewards.create_reward.fixed_discount.description,to:"/edit_reward/fixed_cart/0",value:"fixed_cart"},{Icon:a.createElement("div",{className:"text-primary"},a.createElement("i",{className:"wlr wlrf-percent   text-4xl color-important "})),RewardType:r.rewards.create_reward.percentage_discount.name,Description:r.rewards.create_reward.percentage_discount.description,to:"/edit_reward/percent/0",value:"percent"},{Icon:a.createElement("div",{className:"text-primary"},a.createElement("i",{className:"wlr wlrf-free_product text-4xl   color-important "})),RewardType:r.rewards.create_reward.free_product.name,Description:r.rewards.create_reward.free_product.description,to:"/edit_reward/free_product/0",value:"free_product"},{Icon:a.createElement("div",{className:"text-primary"},a.createElement("i",{className:"wlr wlrf-free_shipping text-4xl   color-important "})),RewardType:r.rewards.create_reward.free_shipping.name,Description:r.rewards.create_reward.free_shipping.description,to:"/edit_reward/free_shipping/0",value:"free_shipping"}];return t.loading?a.createElement("div",{className:"w-full h-120"},a.createElement(d.A,null)):a.createElement("div",{className:"bg-white w-full rounded-b-md  h-full flex flex-col items-start pt-5 px-8 space-y-4"},a.createElement("h4",{className:"flex font-bold items-center text-dark text-sm gap-3 uppercase tracking-wide"},a.createElement("span",{className:""},a.createElement("i",{className:"wlr wlrf-back text-lg font-bold text-dark cursor-pointer color-important ",onClick:function(){e("/rewards")}})),r.rewards.add_new_reward),a.createElement("p",{className:"text-light text-sm font-medium"},r.rewards.add_new_reward_description),a.createElement("div",{className:"flex items-center justify-center w-full  pb-8"},a.createElement("div",{className:"grid grid-cols-3 gap-x-5 gap-y-6"},n.map((function(e){return a.createElement(l,{key:e.RewardType,Icon:e.Icon,RewardType:e.RewardType,Description:e.Description,to:e.to,value:e.value})})))))}}}]);