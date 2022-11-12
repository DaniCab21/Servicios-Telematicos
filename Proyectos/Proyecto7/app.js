//import leerDatosExcel from './servidor.js';
//var leerDatosExcel = require('./servidor');

/* var arregloUnoRetweets = leerDatosExcel("BasesDeDatos/ElonMusk/ElonMusk.xlsx", "Retweets", 1);
var arregloUnoLikes = leerDatosExcel("BasesDeDatos/ElonMusk/ElonMusk.xlsx", "Likes", 1);

var arregloDosTotalEpisodios = leerDatosExcel("BasesDeDatos/OnePiece/OnePiece.xlsx", "TotalEpisodes", 0);
var arregloDosTotalMinutos = leerDatosExcel("BasesDeDatos/OnePiece/OnePiece.xlsx", "TotalMinutes(avg 24)", 0);

var arregloTresRate = leerDatosExcel("BasesDeDatos/Naruto/Naruto.xlsx", "Rate", 0);
var arregloTresVotes = leerDatosExcel("BasesDeDatos/Naruto/Naruto.xlsx", "Votes", 0); */

var arregloUnoRetweets = [
  209, 755, 55927, 802, 9366, 145520, 194, 117, 699,
  126, 37951, 488, 4603, 10733, 130, 477, 149, 719,
  3565, 284, 573, 174, 241, 347, 238, 4121, 46,
  257, 11678, 6978, 3374, 138, 99, 563, 494, 75,
  116, 469, 1289, 133, 91, 235, 281, 272, 635,
  1882, 75, 63, 2112, 216, 1094, 513, 603, 1277,
  3989, 12460, 9180, 1392, 4864, 532, 563, 22736, 159,
  1895, 1325, 1106, 712, 2163, 67, 107, 53, 265,
  556, 241, 867, 1039, 973, 762, 133, 128, 183,
  89, 119, 2900, 337, 508, 102, 123, 78, 102,
  561, 3155, 91, 24031, 2842, 153, 1303, 240, 751
]
var arregloUnoLikes = [
  7021, 26737, 356623, 19353, 195546, 1043592, 3611,
  2848, 10189, 2920, 294406, 5529, 62693, 100922,
  3208, 14209, 2863, 17443, 41798, 4981, 11512,
  3566, 4712, 9328, 4711, 40332, 1580, 5205,
  148115, 97401, 25719, 2231, 2261, 13233, 9551,
  1556, 2467, 12489, 26093, 2639, 1902, 3806,
  5838, 3692, 8781, 15587, 1646, 1528, 47168,
  5152, 11673, 10287, 10825, 35925, 53403, 113306,
  116769, 17195, 61933, 11588, 10958, 211899, 4045,
  36854, 19386, 23152, 11610, 24501, 1684, 2003,
  1466, 3761, 8565, 5536, 13902, 27075, 32633,
  9831, 2735, 2797, 4890, 1302, 2138, 42072,
  3623, 5406, 1484, 1465, 2029, 1582, 5054,
  50073, 1555, 229842, 20196, 3127, 16245, 3929,
  15340
]

var arregloDosTotalEpisodios = [
  3, 5, 10, 12, 15, 2, 6, 8, 2, 4, 2,
  8, 14, 39, 5, 3, 5, 9, 43, 11, 15, 5,
  2, 35, 49, 13, 11, 45, 3, 21, 2, 14, 31,
  4, 33, 27, 6, 52, 4, 47, 3, 118, 4, 29,
  3, 95, 12, 26, 2, 41, 70
]
var arregloDosTotalMinutos = [
  72, 120, 240, 288, 360, 48, 144, 192,
  48, 96, 48, 192, 336, 936, 120, 72,
  120, 216, 1032, 264, 360, 120, 48, 840,
  1176, 312, 264, 1080, 72, 504, 48, 336,
  744, 96, 792, 648, 144, 1248, 96, 1128,
  72, 2832, 96, 696, 72, 2280, 288, 624,
  48, 984, 1680
]

var arregloTresRate = [
  8.2, 8, 8, 8.2, 8.2, 8.2, 7.8, 7.7, 7.6, 7.5, 7.7, 7.9,
  8.1, 8.3, 8.4, 7.6, 7.8, 7.7, 7.8, 8.1, 8.1, 7.9, 7.9, 8.1,
  7.9, 8.4, 8.5, 7.1, 8.1, 8.4, 8.5, 7.9, 7.7, 7.2, 7.3, 7.2,
  7.1, 7.1, 7.8, 7.7, 8, 8.5, 7.9, 7.4, 7.3, 7.3, 7.4, 7.2,
  7.5, 7.3, 7.5, 8, 7.5, 7.5, 7.9, 7.6, 6.9, 6.6, 6.5, 6.7,
  6.7, 6.5, 6.6, 6.6, 6.9, 6.7, 6.8, 6.7, 6.6, 6.6, 6.6, 7.3,
  7.7, 7.5, 7.4, 7.7, 8.3, 8.6, 8.6, 8.5, 8.1, 8.6, 8.3, 8.5,
  8.4, 8.4, 8.6, 8.4, 7.7, 6.9, 7, 6.7, 6.5, 6.4, 6.4, 6.6,
  6.8, 6.8, 6.8
]
var arregloTresVotes =
  [
    728, 575, 508, 517, 486, 480, 457, 437, 434, 424, 425,
    425, 432, 452, 447, 403, 405, 407, 399, 427, 421, 413,
    410, 418, 414, 656, 474, 367, 402, 439, 675, 405, 374,
    362, 364, 362, 361, 360, 379, 393, 395, 459, 380, 354,
    346, 347, 348, 355, 360, 345, 358, 384, 364, 362, 363,
    346, 269, 267, 262, 256, 259, 256, 253, 250, 249, 250,
    247, 247, 251, 253, 265, 335, 360, 340, 334, 348, 382,
    501, 482, 634, 372, 569, 377, 427, 518, 589, 730, 617,
    344, 287, 260, 256, 253, 245, 246, 239, 240, 239, 244
  ]

/**************************************************Modelo 1 */
const xs1 = tf.tensor(arregloUnoRetweets);
const ys1 = tf.tensor(arregloUnoLikes);

const modelo1 = tf.sequential();
modelo1.add(tf.layers.dense({ units: 1, inputShape: [1] }));
modelo1.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });

modelo1.fit(xs1, ys1, { epochs: 500 });
var salidaUno = modelo1.predict(xs1);
graficar(arregloUnoRetweets, salidaUno, "Cantidad Retweets VS Datos Modelados", "myPlot1");
graficar(arregloUnoRetweets, arregloUnoLikes, "Cantidad Retweets VS Cantidad de Likes", "myPlot1.1");


/**************************************************Modelo 2 */
const xs2 = tf.tensor(arregloDosTotalEpisodios);
const ys2 = tf.tensor(arregloDosTotalMinutos);

const modelo2 = tf.sequential();
modelo2.add(tf.layers.dense({ units: 1, inputShape: [1] }));
modelo2.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });

modelo2.fit(xs2, ys2, { epochs: 500 });
var salidaDos = modelo2.predict(xs2);
graficar(arregloDosTotalEpisodios, salidaDos, "Total de Episodios VS Datos Modelados", "myPlot2");
graficar(arregloDosTotalEpisodios, arregloDosTotalMinutos, "Total de Episidios VS Total de Minutos", "myPlot2.1");


/**************************************************Modelo 3 */
const xs3 = tf.tensor(arregloTresRate);
const ys3 = tf.tensor(arregloTresVotes);

const modelo3 = tf.sequential();
modelo3.add(tf.layers.dense({ units: 1, inputShape: [1] }));
modelo3.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });

modelo3.fit(xs3, ys3, { epochs: 500 });
var salidaTres = modelo3.predict(xs3);
graficar(arregloTresRate, salidaTres, "Rate VS Datos Modelados", "myPlot3");
graficar(arregloTresRate, arregloTresVotes, "Rate VS Votes", "myPlot3.1");


function graficar(arregloX, arregloY, titulo, div) {
  const data = [{ x: arregloX, y: arregloY, mode: "markers", type: "scatter" }];
  const layout = {
    title: titulo,
    showlegend: false,
  };
  Plotly.newPlot(div, data, layout, { scrollZoom: true });
}
