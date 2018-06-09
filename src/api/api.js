const forge = require('node-forge');
const APP_KAY = 'xxxxxxxxxxxxxx'

export const createSignature = () => {
    let signParams = [
        'ver=5.1.0',
        'uuid=915EFFC9-BCA6-4431-A36A-D4B5069D36D3',
        'systemVersion=11.2',
        'page_size=10',
        'page_no=1',
        'openid=p2p_ios',
        '_type=json'
    ];

    signParams = signParams.sort()

    let signParamsString = signParams.join('&');
    let signParamsAndAppkey = signParamsString + APP_KAY;

    const md = forge.md.md5.create();
    md.update(signParamsAndAppkey);
    const sign = md.digest().toHex();

    return 'sign='+ sign + '&' + 'sign_type=' + 'MD5&' + signParamsString;
}