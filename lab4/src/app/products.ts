export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Массажер HADIYA MS-205 напольный воздушно-компрессионный',
    price: 88_241,
    description: `тип: напольный
  вид массажа: воздушно-компрессионный
  зона массажа: ноги, икры
  материал массажных элементов: пластик, искусственная кожа
  материал: искусственная кожа, пластик, текстиль
  размеры: 40х40х40 cм`,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he4/h15/50003062652958/hadiya-ms-205-vozdushno-kompressionnyi-nadavlivayushchii-razminayushchii-rastirayushchii-napol-nyi-chernyi-krasnyi-104449459-1.jpg",
    url: "https://kaspi.kz/shop/p/hadiya-ms-205-napol-nyi-vozdushno-kompressionnyi-104449459/?c=710000000#!/item",
    rating: 5

  },
  {
    id: 2,
    name: 'Массажер XANDO HSM-99 массажный матрас на всё тело',
    price: 88_500,
    description: `тип: ручной
вид массажа: шиацу
зона массажа: бедра, голени, живот, колени, ноги, плечи, поясница, руки, спина, стопы, талия, шея, ягодицы, икры
материал массажных элементов: пластик, электродные пластины, искусственная кожа
материал: искусственная кожа, пластик`,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h63/hf3/66671003959326/ado-massage-107936044-1.jpg",
    url: "https://kaspi.kz/shop/p/xando-hsm-99-massazhnyi-matras-na-vsjo-telo-107936044/?c=710000000#!/item",
    rating:5
  },
  {
    id: 3,
    name: 'Массажер BORK D603 ручной вибрационный',
    price: 89_905,
    description: `тип: ручной
вид массажа: вибрационный
зона массажа: голова
материал массажных элементов: силикон
материал: пластик
размеры: 9х9.5х7.5 см`,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc8/hf2/32294015074334/bork-d603-vibratsionnyi-ruchnoi-korichnevyi-100770261-1.jpg",
    url: "https://kaspi.kz/shop/p/bork-d603-ruchnoi-vibratsionnyi-100770261/?c=710000000#!/item",
    rating: 5
  },
  {
    id: 4,
    name: 'Массажер Yamaguchi Yoki воротник вибрационный',
    price: 119_990,
    description: `тип: воротник
вид массажа: вибрационный
зона массажа: шея
материал массажных элементов: текстиль`,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hff/h03/32402165104670/yamaguchi-yoki-seryj-100101424-1-Container.jpg",
    url: "https://kaspi.kz/shop/p/yamaguchi-yoki-vorotnik-vibratsionnyi-100101424/?c=710000000#!/item",
    rating: 5
  },
  {
    id: 5,
    name: 'Массажер Casada Dr.Stone CS-298 накладка на спинку стула вибрационный',
    price: 109_090,
    description: `тип: накладка на спинку стула
вид массажа: вибрационный
зона массажа: руки
материал массажных элементов: камень`,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h74/h26/34333906796574/casada-dr-stone-cs-298-101335431-1-Container.jpg",
    url: "https://kaspi.kz/shop/p/casada-dr-stone-cs-298-nakladka-na-spinku-stula-vibratsionnyi-101335431/?c=710000000#!/item",
    rating: 5
  },
  {
    id: 6,
    name: 'Массажер FLOW Mini Arctic ручной перкуссионный',
    price: 105_000,
    description: `тип: ручной
вид массажа: перкуссионный
зона массажа: плечи
материал массажных элементов: резина`,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h43/hd1/49287426211870/flow-mini-arctic-white-belyj-101628308-1-Container.jpg",
    url: "https://kaspi.kz/shop/p/flow-mini-arctic-ruchnoi-perkussionnyi-101628308/?c=710000000#!/item",
    rating: 5
  },
  {
    id: 7,
    name: 'Массажер Beurer MG315 накладка на спинку стула вибрационный',
    price: 172_882,
    description: `тип: накладка на спинку стула
вид массажа: вибрационный
зона массажа: шея
материал массажных элементов: пластик`,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hae/h0f/48997661835294/beurer-massaznaa-nakidka-103237336-1.jpg",
    url: "https://kaspi.kz/shop/p/beurer-mg315-nakladka-na-spinku-stula-vibratsionnyi-103237336/?c=710000000#!/item",
    rating: 5
  },
  {
    id: 8,
    name: 'Массажер BORK D619 воротник акупунктурный',
    price: 174276,
    description: `тип: воротник
вид массажа: акупунктурный
зона массажа: шея
материал массажных элементов: металл
материал: пластик`,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbb/h0e/47586817048606/bork-d619-vibratsionnyi-vorotnik-seryi-103078870-1.jpg",
    url: "https://kaspi.kz/shop/p/bork-d619-vorotnik-akupunkturnyi-103078870/?c=710000000#!/item",
    rating: 4
  },
  {
    id: 9,
    name: 'Массажер Beurer MG280 напольный вибрационный',
    price: 169990,
    description: `тип: напольный
вид массажа: вибрационный
зона массажа: плечи
материал массажных элементов: текстиль`,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h95/h12/49267138166814/beurer-mg280-101664377-1-Container.jpg",
    url: "https://kaspi.kz/shop/p/beurer-mg280-napol-nyi-vibratsionnyi-101664377/?c=710000000#!/item",
    rating: 5
  },
  {
    id: 10,
    name: 'Массажное кресло Массажное кресло-качалка Delta серый',
    price: 270000,
    description: `зона массажа: поясница, спина, шея, ягодицы 
количество программ: 1
вид массажа: вибрационный, постукивающий, похлопывающий, разминающий, разогревающий, Шиацу
материал: текстиль`,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h97/hbc/52228181655582/relaxy-kreslo-kacalka-relaxy-2021-2-seryj-101154783-1-Container.jpg",
    url: "https://kaspi.kz/shop/p/massazhnoe-kreslo-kachalka-delta-seryi-101154783/?c=710000000#!/item",
    rating: 4
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/