const forge   = require('node-forge');
const APP_KAY = '';

export const sha1 = (str) => {
    const md = forge.md.sha1.create().update(str);
    return md.digest().toHex();
}

export const createRandomNumStr = (num) => {
    let str = num.toString().replace('0.', '');
    return str.substr(0, 6)
}


/**
 * 
 * @param {如果这个请求需要分页，则传入页码，默认为1} pageNo 
 * @param {如果这个请求需要分页，则传入每页数据条数，默认为10} pageSize 
 */
export const buildPublicSign = (pageNo = 1, pageSize = 10) => {
    let signStr = '';
    let paramsStr = '';
    
    const md = forge.md.md5.create();

    let params = [
        `page_no=${pageNo}`,
        `page_size=${pageSize}`,
        'openid=p2p_ios',
        '_type=json'
    ];

    paramsStr = params.sort().join('&');

    signStr = md.update(paramsStr + APP_KAY).digest().toHex();

    return `sign=${signStr}&sign_type=MD5&${paramsStr}`;
}


/**
 * 构建需要校验登录的签名
 * @param {*} username 
 * @param {*} access_token 
 * @param {*} userid 
 * @param {*} pageNo 
 * @param {*} pageSize 
 */
export const buildAuthSign = (username, access_token, userid, pageNo = 1, pageSize = 10) => {
    const md   = forge.md.md5.create();
    const uuid = localStorage.getItem('uuid') || '';

    const params = [
        `page_no=${pageNo}`,
        `page_size=${pageSize}`,
        `uuid=${uuid}`,
        `user_name=${username}`,
        'openid=p2p_ios',
        '_type=json',
        `access_token=${access_token}`,
        `userId=${userid}`,
        `userid=${userid}`
    ];

    const paramsStr = params.sort().join('&');
    const sign      = md.update(paramsStr + APP_KAY).digest().toHex();

    return `sign=${sign}&sign_type=MD5&${paramsStr}`;
}


/**
 * 构建登录请求签名
 * @param {用户名} username 
 * @param {密码} pwd 
 */
export const buildLoginSign = (username, pwd) => {
    const md              = forge.md.md5.create();
    const uuid            = new Date().getTime() + username;
    const salt            = createRandomNumStr(Math.random());
    const pwd_hash        = sha1(pwd);
    const pwd_hash_double = sha1(salt + sha1(username + pwd));

    localStorage.setItem('uuid', uuid);

    const params = [
        `uuid=${uuid}`,
        `user_name=${username}`,
        `pwd=${pwd_hash_double}`,
        `pwd_hash=${pwd_hash}`,
        `salt=${salt}`,
        'openid=p2p_ios',
        '_type=json'
    ];

    const paramsStr = params.sort().join('&');
    const sign = md.update(paramsStr + APP_KAY).digest().toHex();

    return `sign=${sign}&sign_type=MD5&${paramsStr}`;
}


/**
 * 构建购买标地签名
 */

// operate_type 操作类型 bid_buy
// product_id   产品ID
// amount       金额
// act_code     优惠券
// rate_code    加息券
// p2pSubjectId 投资的债券ID
// p2pProductId 极计划产品ID
// nbCode       极计划验证nb码
export const buildBuyAuthSign = ({
    username,
    pageNo = 1,
    pageSize = 10,
    operate_type,
    product_id,
    amount,
    act_code,
    rate_code,
    p2pSubjectId,
    p2pProductId,
    nbCode
}) => {

    const md           = forge.md.md5.create();
    const uuid         = localStorage.getItem('uuid') || '';
    const userid       = localStorage.getItem('userid') || '';
    const access_token = localStorage.getItem('token') || '';

    const params = [
        '_type=json',
        'openid=p2p_ios',
        `uuid=${uuid}`,
        `page_no=${pageNo}`,
        `page_size=${pageSize}`,
        `access_token=${access_token}`,
        `userId=${userid}`,
        `userid=${userid}`,

        `user_name=${username}`,
        `operate_type=${operate_type}`,
        `product_id=${product_id}`,
        `amount=${amount}`,
        `act_code=${act_code}`,
        `rate_code=${rate_code}`,
        `p2pSubjectId=${p2pSubjectId}`,
        `p2pProductId=${p2pProductId}`,
        `nbCode=${nbCode}`
    ];

    const paramsStr = params.sort().join('&');
    const sign      = md.update(paramsStr + APP_KAY).digest().toHex();

    return `sign=${sign}&sign_type=MD5&${paramsStr}`;
}
