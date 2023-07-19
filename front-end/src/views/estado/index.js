import { CRow, CCol, CCardBody, CCard, CCardHeader, CFormFloating, CFormInput } from "@coreui/react";
import { Fragment, useEffect, useState } from "react";
import BlockUi from "react-block-ui";
import { api } from "../../services/api";
import DataTable from "react-data-table-component";
import NenhumRegistroEncontrado from "../../components/NenhumRegistroEncontrado";
import { ChevronDown } from 'react-feather';

const colunas = [
    { selector: row => row.nome, name: "Nome" },
    { selector: row => row.sigla, name: "Sigla", width: '150px' }
]

const Estado = () => {
    const [ bloqueiaTela, setBloqueiaTela ] = useState(false);
    const [ filtro, setFiltro ] = useState('');
    const [ listaEstados, setlistaEstados ] = useState([]);
    const [ listaEstadosFiltrado, setlistaEstadosFiltrado ] = useState([])

    const handleChangePesquisar = (filtro) => {
        let dadosFiltrados = [];
        setFiltro(filtro);
        
        if (filtro.length > 0) {
          dadosFiltrados = listaEstados.filter(item => {
            const startsWith = item.nome.toString().toLowerCase().startsWith(filtro.toLowerCase()) ||
                               item.sigla.toString().toLowerCase().startsWith(filtro.toLowerCase());
            const includes = item.nome.toString().toLowerCase().includes(filtro.toLowerCase()) || 
                              item.sigla.toString().toLowerCase().includes(filtro.toLowerCase());
    
            if (startsWith) 
              return startsWith
            else if (!startsWith && includes) 
              return includes
            else 
              return null
          })
    
          setlistaEstadosFiltrado(dadosFiltrados)
        }
        else
        setlistaEstadosFiltrado([]);  
      }
   
  
    useEffect(() => {
        async function carregarDados(){
            setBloqueiaTela(true);

            await api.get('estados')
                    .then((res) => {
                        setlistaEstados(res.data);
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
                                            columns={ colunas } data={ filtro.length > 0 ? listaEstadosFiltrado : listaEstados } sortIcon={<ChevronDown size={10} />} noDataComponent={ <NenhumRegistroEncontrado /> } /> 
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

export default Estado;