import data from './imgDent.json';

const IMG_PATH = './assets/img/ImgDent';

export const get_img_dent = (num, type='v') => {
    let img = data.filter((item) => {
        return item.nomimg === num+type;
    })
    return IMG_PATH+'/'+img[0].img;
}
