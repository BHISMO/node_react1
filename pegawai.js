import React, {Component} from 'react';  
import $ from 'jquery';  
import axios from 'axios';  
  
class Pegawai extends Component {  
  
  constructor() {  
    super();  
    this.state = {  
      pegawai: [], // array pegawai untuk menampung data pegawai  
      nip: "",  
      nama: "",  
      alamat: "",  
      action: "",  
      search: "",  
    }  
  }  
     
  render(){  
    return (  
        <div className="m-3 card">  
        <div className="card-header bg-info text-white">Data Pegawai</div>  
        <div className="card-body">  
        <input type="text" className="form-control mb-2" name="search" value={this.state.search}  
          onChange={this.bind} onKeyUp={this.findPegawai} placeholder="Pencarian..." />  
        {/* tampilan tabel pegawai */}  
          <table className="table">  
            <thead>  
              <tr>  
                <th>NIP</th>  
                <th>Nama</th>  
                <th>Alamat</th>  
                <th>Option</th>  
              </tr>  
            </thead>
            </table>
            </div>
            </div>

    );  
  }  
}
export default Pegawai; 
