/* belajar shared obj
var _app_shared=require('./shared.js');

console.log(_app_shared.Tampil.umur);
*/
/*belajar obj factory */

var nama=require('./obj_factory.js')
nama_obj=nama();
nama_obj.nama="Maulana";

console.log('NAMA DARI APP2'+nama_obj.nama);
