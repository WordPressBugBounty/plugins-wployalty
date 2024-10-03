(()=>{"use strict";const e=window.React,{registerPlugin:t}=wp.plugins,{ExperimentalOrderMeta:r,ExperimentalOrderShippingPackages:a,ExperimentalDiscountsMeta:n,registerCheckoutFilters:l,registerCheckoutBlock:o,ValidatedTextInput:c}=wc.blocksCheckout,{addAction:s}=wp.hooks,{__}=wp.i18n,{useState:m,useCallback:i}=wp.element;s("experimental__woocommerce_blocks-cart-set-item-quantity","wpl-earning-message",(e=>{let t=!0;e&&e?.product&&e?.product?.item_data&&e?.product?.item_data.find((e=>{if("yes"===e?.loyalty_free_product)return t=!1,t})),t||window.location.reload()}));const u=({cart:t,extensions:r,context:a})=>{let n="";return"woocommerce/cart"===a&&r.wp_loyalty_rules_message?n=r.wp_loyalty_rules_message.cart_earning_message:"woocommerce/checkout"===a&&r.wp_loyalty_rules_message&&(n=r.wp_loyalty_rules_message.checkout_earning_message),n?(0,e.createElement)("div",{dangerouslySetInnerHTML:{__html:n}}):""},_=({cart:t,extensions:r,context:a})=>{let n="";return"woocommerce/cart"===a&&r.wp_loyalty_rules_message?n=r.wp_loyalty_rules_message.cart_redeeming_message:"woocommerce/checkout"===a&&r.wp_loyalty_rules_message&&(n=r.wp_loyalty_rules_message.checkout_redeeming_message),n?(0,e.createElement)("div",{dangerouslySetInnerHTML:{__html:n}}):""};function d(e,t=""){let r=wc.wcSettings.getSetting("wp-loyalty-rules-message_data");return r[e]?r[e]:t}if(t("wpl-earning-message",{render:()=>(0,e.createElement)(e.Fragment,null,(()=>{switch(d("earn_display_position","order_meta")){case"order_meta":return(0,e.createElement)(r,null,(0,e.createElement)(u,null));case"coupon":return(0,e.createElement)(n,null,(0,e.createElement)(u,null));case"shipping":return(0,e.createElement)(a,null,(0,e.createElement)(u,null));default:return""}})(),(()=>{switch(d("redeem_display_position","order_meta")){case"order_meta":return(0,e.createElement)(r,null,(0,e.createElement)(_,null));case"coupon":return(0,e.createElement)(n,null,(0,e.createElement)(_,null));case"shipping":return(0,e.createElement)(a,null,(0,e.createElement)(_,null));default:return""}})()),scope:"woocommerce-checkout"}),l("wpl-earning-message",{showRemoveItemLink:(e,t,r)=>{if("cart"!==r?.context)return e;let a=!0;return r&&r?.cartItem&&r?.cartItem?.item_data&&r?.cartItem?.item_data.find((e=>{if("yes"===e?.loyalty_free_product&&e?.in_stock)return a=!1,a})),a}}),d("is_enable_birthday_field",!1)){const t=({children:t,checkoutExtensionData:r})=>{const[a,n]=m(d("user_birth_date","")),{setExtensionData:l}=r,o=i((e=>{l("wlr_checkout_block","wlr_dob",e),n(e)}),[n,l]);return(0,e.createElement)("div",{className:"birthday-fields"},(0,e.createElement)("label",{htmlFor:"wlr_dob"},__("Birthday (optional)","wp-loyalty-rules")),(0,e.createElement)(c,{id:"wlr_dob",type:"date",required:!1,onChange:o,className:"wlr-birthday-input-date",label:"",value:a,max:d("current_date","")}))},r={$schema:"https://schemas.wp.org/trunk/block.json",apiVersion:2,name:"wlr_checkout_block",version:"1.0.0",title:"Birthday date",category:"woocommerce",parent:["woocommerce/checkout-shipping-address-block"],attributes:{lock:{type:"object",default:{remove:!0,move:!0}}}};r.parent=d("birthday_parent_block",["woocommerce/checkout-shipping-address-block"]),o({metadata:r,component:t})}d("is_enable_signup_message",!1)&&o({metadata:{$schema:"https://schemas.wp.org/trunk/block.json",apiVersion:2,name:"wlr_checkout_signup_block",version:"1.0.0",title:"Birthday date",category:"woocommerce",parent:["woocommerce/checkout-contact-information-block"],attributes:{lock:{type:"object",default:{remove:!0,move:!0}}}},component:({children:t,checkoutExtensionData:r})=>{let a=d("signup_message","");return a?(0,e.createElement)("div",{className:"wlr-signup-message"},(0,e.createElement)("p",{dangerouslySetInnerHTML:{__html:a}})):""}})})();