import { CRow, CCol, CCardBody, CCard, CCardHeader, CFormFloating, CFormInput } from "@coreui/react";
import { Fragment, useEffect, useState } from "react";
import BlockUi from "react-block-ui";
import { api } from "../../services/api";
import DataTable from "react-data-table-component";
import NenhumRegistroEncontrado from "../../components/NenhumRegistroEncontrado";
import { ChevronDown } from 'react-feather';

const colunas = [
    { selector: row => row.id, name: "Código", right: true ,width: '150px' },
    { selector: row => row.nome, name: "Nome" },
    { selector: row => row.estado.sigla, name: "Sigla", width: '150px' }
]

const Cidade = () => {
    const [ bloqueiaTela, setBloqueiaTela ] = useState(false);
    const [ filtro, setFiltro ] = useState('');
    const [ listaCidades, setListaCidades ] = useState([]);
    const [ listaCidadesFiltrado, setListaCidadesFiltrado ] = useState([])

    const handleChangePesquisar = (filtro) => {
        let dadosFiltrados = [];
        setFiltro(filtro);
        
        if (filtro.length > 0) {
          dadosFiltrados = listaCidades.filter(item => {
            const startsWith = item.id.toString().toLowerCase().startsWith(filtro.toLowerCase()) ||
                               item.nome.toString().toLowerCase().startsWith(filtro.toLowerCase()) ||
                               item.estado.sigla.toString().toLowerCase().startsWith(filtro.toLowerCase());
            const includes = item.nome.toString().toLowerCase().includes(filtro.toLowerCase()) || 
                             item.estado.sigla.toString().toLowerCase().includes(filtro.toLowerCase());
    
            if (startsWith) 
              return startsWith
            else if (!startsWith && includes) 
              return includes
            else 
              return null
          })
    
          setListaCidadesFiltrado(dadosFiltrados)
        }
        else
        setListaCidadesFiltrado([]);  
      }
   
  
    useEffect(() => {
        async function carregarDados(){
            setBloqueiaTela(true);

            await api.get('cidades')
                    .then((res) => {
                        setListaCidades(res.data);
                        setBloqueiaTela(false);
                    })
                    .catch((err) => {
                        console.log(err.data)
                    })
        }

        carregarDados();
    }, [])

    return(
        <Fragment>
            <BlockUi tag="div" blocking={ bloqueiaTela }>
            <CRow>
                <CCol xs>
                    <CCard className="mb-4">
                        <CCardBody>
                            <CCard>
                                <CCardHeader>
                                    <CFormFloating> 
                                    <CCol lg={6} sm={6} xs={12}>
                                        <CFormInput placeholder='Pesquisar...' value={ filtro } onChange={(e) => handleChangePesquisar(e.target.value)} /> 
                                    </CCol>
                                    </CFormFloating>
                                </CCardHeader>
                                <CCardBody>
                                    <CCol xs={12}>
                                        <DataTable noHeader pagination paginationPerPage={15} selectableRowsNoSelectAll striped responsive className='react-dataTable' 
                                            columns={ colunas } data={ filtro.length > 0 ? listaCidadesFiltrado : listaCidades } sortIcon={<ChevronDown size={10} />} noDataComponent={ <NenhumRegistroEncontrado /> } /> 
                                    </CCol>
                                </CCardBody>
                            </CCard>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
            </BlockUi>
        </Fragment>
    )
}

export default Cidade;