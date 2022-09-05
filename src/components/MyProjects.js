import logo from '../img/logo.svg'
import { ArrowRightIcon, XMarkIcon } from '@heroicons/react/24/outline'
import CardMyProject from './CardMyProject'
import htmlSvg from '../img/skills/html.svg'
import cssSvg from '../img/skills/css.svg'
import nodeSvg from '../img/skills/node.svg'
import firebaseSvg from '../img/skills/firebase.svg'
import mongodbSvg from '../img/skills/mongodb.svg'
import mysqlSvg from '../img/skills/mysql.svg'
import pgsqlSvg from '../img/skills/pgsql.svg'
import vueSvg from '../img/skills/vue.svg'
import reactSvg from '../img/skills/react.svg'
import githubSvg from '../img/skills/github.svg'
import ciSvg from '../img/skills/ci.svg'
import laravelSvg from '../img/skills/laravel.svg'
import jquerySvg from '../img/skills/jquery.svg'
import capacitorSvg from '../img/skills/capacitor.svg'
import MakeWith from './MakeWith'
import DialogProject from './DialogProject'
import { useState } from 'react'

function MyProjects() {
  const data = [
    {
      title: 'Pengelolaan Aset Tanah Warga',
      link: 'https://yaap-aset.fopegram.id',
      simple_description: 'Aplikasi ini tentang pendataan aset warga, terdiri dari 4 role (Super Admin, Kepala Desa, Operator, Warga).',
      description: 'Aplikasi ini tentang pendataan aset warga, terdiri dari 4 role (Super Admin, Kepala Desa, Operator, Warga) untuk Super Admin bisa melakukan semua konfigurasi, Kepala Desa dapat melakukan pendataan warga desa, aset warga, & dokumen (sporadik, surat pernyataan, turunan letter c), Operator kurang lebih sama seperti kepala desa tetapi tidak dapat menambah atau mengubah data warga dan asetnnya, Warga dapat mengisi aset yang dia punya dan melihat dokumennya setelah disetujui / diverifikasi oleh Admin ataupun Kepala Desa.',
      skills: [
        {text: 'Vue Js', svg: vueSvg},
        {text: 'Laravel', svg: laravelSvg},
        {text: 'MySQL', svg: mysqlSvg},
        {text: 'HTML', svg: htmlSvg},
        {text: 'CSS', svg: cssSvg},
      ],
      auth: [
        {
          level: 'Super Admin',
          username: 'superadmin',
          password: 'superadmin'
        },
        {
          level: 'Kepala Desa',
          username: 'kepaladesa1',
          password: 'kepaladesa1'
        },
        {
          level: 'Operator',
          username: 'operator1',
          password: 'operator1'
        },
        {
          level: 'Warga',
          username: '1234123412341234',
          password: '1234123412341234'
        },
      ]
    },
    {
      title: 'Aplikasi Logistik | Titik Muat',
      link: 'https://tm.fopegram.id',
      simple_description: 'Titik Muat adalah aplikasi logistik yang masih saya kembangkan, teridiri dari 3 role user (Admin, Mitra, Kurir).',
      description: 'Titik Muat adalah aplikasi logistik yang masih saya kembangkan, teridiri dari 3 role user (Admin, Mitra, Kurir) untuk Admin dapat melakukan semua aktifikas, Mitra bisa melakukan pendataan tentang barang yang akan dikirimkan dll, untuk Kurir dapat melihat data yang sedang dia antarkan dan dapat mengisi sampai dimana barang itu berada.',
      skills: [
        {text: 'Vue Js', svg: vueSvg},
        {text: 'Laravel', svg: laravelSvg},
        {text: 'MySQL', svg: mysqlSvg},
        {text: 'HTML', svg: htmlSvg},
        {text: 'CSS', svg: cssSvg},
      ],
      auth: [
        {
          level: 'Admin',
          username: 'admin@gmail.com',
          password: 'Asdfghjk123..'
        },
        {
          level: 'Mitra / Logistik',
          username: 'log@gmail.com',
          password: 'Asdfghjk123..'
        },
        {
          level: 'Kurir',
          username: 'kurir2@gmail.com',
          password: 'Asdfghjk123..'
        },
      ]
    },
    {
      title: 'E-Library App',
      link: 'https://fopegram.id/elibrary',
      simple_description: 'Adalah aplikasi pembuatan materi dan soal berdasarkan library dan kelasnya, terdapat 2 role (Admin, Pengguna).',
      description: 'Adalah aplikasi pembuatan materi dan soal berdasarkan library dan kelasnya, terdapat 2 role (Admin, Pengguna) untuk admin dapat membuat kelas, library sesuai kelasnnya, materi dan soal sesuai library serta pembagian kelas untuk penggunanya. Pengguna dapat melihat library sesuai kelas dan melihat materi serta mengerjakan soal yang tersedia.',
      skills: [
        {text: 'JQuery', svg: jquerySvg},
        {text: 'CI', svg: ciSvg},
        {text: 'MySQL', svg: mysqlSvg},
        {text: 'HTML', svg: htmlSvg},
        {text: 'CSS', svg: cssSvg},
      ],
      auth: [
        {
          level: 'Admin',
          username: 'admin@gmail.com',
          password: 'admin'
        },
        {
          level: 'Peserta',
          username: 'yoga@gmail.com',
          password: 'yoga'
        },
      ]
    },
    {
      title: 'Invoice App',
      link: 'https://yaap-invoice.web.app',
      mobile_link: 'https://drive.google.com/file/d/17nyXyXfbva6nZeT5wd50juPeLY1bn8vK/view?usp=sharing',
      simple_description: 'Aplikasi ini adalah aplikasi pendataan invoice dan laporan invoice serta piutang.',
      description: 'Aplikasi ini adalah aplikasi pendataan invoice dan laporan invoice serta piutang.',
      skills: [
        {text: 'Vue Js', svg: vueSvg},
        {text: 'Firebase', svg: firebaseSvg},
        {text: 'Capacitor', svg: capacitorSvg},
        {text: 'HTML', svg: htmlSvg},
        {text: 'CSS', svg: cssSvg},
      ],
      auth: [
        {
          level: 'Admin',
          username: 'admin@gmail.com',
          password: 'Asdfghjk123..'
        },
      ]
    },
  ]

  const [dataDialog, setDataDialog] = useState(false)
  const [show, setShow] = useState(false)

  return (
    <> 
      <div className="relative w-full flex items-center justify-center -z-10 mt-28 space-x-4 lg:mb-10 mb-4"> 
          <span className="text-primary text-sm font-semibold ml-2 flex space-x-1 uppercase items-center justify-center">
              <span>M</span>
              <span>Y</span> 
          </span>
          <img src={logo} className="w-5 md:w-5" id="cover-services" alt='Logo' />
          <span className="text-primary text-sm font-semibold flex space-x-1 uppercase items-center justify-center">
              <span>P</span>
              <span>R</span>
              <span>O</span>
              <span>J</span>
              <span>E</span>
              <span>C</span>
              <span>T</span>
              <span>S</span>
          </span>
      </div>
      
      {dataDialog && (<DialogProject setShow={setShow} show={show} data={dataDialog} />)}

      <div className="flex flex-wrap justify-center items-center lg:gap-x-24 lg:gap-y-10">
        {data.map((project, i) => (
          <CardMyProject setShow={setShow} setDataDialog={setDataDialog} key={i} project={project} />
        ))}
      </div>  
    </>
  )
}

export default MyProjects