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

export const createSignature = (pageNo = 1, pageSize = 10) => {
    let signStr   = '';
    let paramsStr = '';
    const md      = forge.md.md5.create();

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
 * @param {如果这个请求需要分页，则传入页码，默认为1} pageNo 
 * @param {如果这个请求需要分页，则传入每页数据条数，默认为10} pageSize 
 */
export const buildAuthSign = (pageNo = 1, pageSize = 10) => {
    
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

    let params = [
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
