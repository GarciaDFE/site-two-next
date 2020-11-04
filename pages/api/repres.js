 const repres = [
   {
      id: 1,
      titleRegion: "São Paulo",
      subtitleRegion: "Estado de",
      regions: {
         title: "Todas as Regiões",
         subtitle: "",
         text: `<strong>Contato:</strong><br/>
         Sr. Cláudio Ramos de Camargo<br/>
         Tels: +55 (11) 3441-1485 / 3857-4402<br/>
         Tels: +55 (11) 98406-1835 / 99955-3477<br/>
         claudio@crcsolucoes.com.br`
      }
   },
   {
      id: 2,
      titleRegion: "Minas Gerais",
      subtitleRegion: "Estado de",
      regions: {
         title: "Todas as Regiões",
         subtitle: "",
         text: `<strong>Contato:</strong><br/>
         Sr. Pio Penna<br/>
         Tel: +55 (31) 99292-7478<br/>
         e-mail: pio@eletrosil.com.br<br/>`
      }
   },
   {
      id: 3,
      titleRegion: "Demais Estados",
      subtitleRegion: "",
      regions: {
         title: "Todas as Regiões",
         subtitle: "",
         text: `<strong>Empresa:</strong><br/>
         Eletrosil Indústria Metalúrgica Ltda.<br/>
         Rua Tenente Chantre, 337 – Vila Invernada<br/>
         CEP 03351-080 – São Paulo-SP<br/>
         Tels: +55 (11) 2671-7088<br/>
         <br/>
         <strong>Contato:</strong><br/>
         Setor Comercial:<br/>
         e-mail: vendas@eletrosil.com.br<br/>
         Setor Técnico:<br/>
         e-mail: depto.tecnico@eletrosil.com.br`
      }
   }
]

export default function handler(req, res) {
   // Get data from your database
   res.status(200).json(repres)
}