// Css & bootstrap
import '../../styles/TachesItem.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Component
import EditDelete from './EditDelete'


function TachesItem({ id, name, etat, onClick }) {
    var etatClass = ""
	switch (etat) {
		case "A faire": etatClass = "to-do";break;
		case "En cours": etatClass = "ongoing";break;
		case "Fait": etatClass = "done";break;
		case "En retard": etatClass = "late";break;
		default:      return "";
	}

	return (
            <Row className='taches-item-row' key={id}>
                <Col className='taches-item-col taches-item-col-1' md={5} sm={5}>
                    {name}
                </Col>
                <Col className={`taches-item-col tache-item-etat ${etatClass}`} md={5} sm={5}  >
                    {etat}
                </Col>
                <Col md={1} sm={1} className="taches-item-col edit-col" >
                    <EditDelete queryType='edit' id={id} name={name} etat={etat}/>
                </Col>
                <Col md={1} sm={1} className="taches-item-col delete-col">
                    <EditDelete queryType='delete' id={id} name={name} onClick={onClick}/>
                </Col>
            </Row>
	)
}


export default TachesItem


// const TachesItem = props => {

//     var etatClass = ""
// 	switch (props.etat) {
// 		case "A faire": etatClass = "to-do";break;
// 		case "En cours": etatClass = "ongoing";break;
// 		case "Fait": etatClass = "done";break;
// 		case "En retard": etatClass = "late";break;
// 		default:      return "";
// 	}

// 	return (
//             <Row className='taches-item-row' key={props.id}>
//                 <Col className='taches-item-col-1' sm={5}>
//                     {props.name}
//                 </Col>
//                 <Col className={`tache-item-etat ${etatClass}`} sm={5}  >
//                     {props.etat}
//                 </Col>
//                 <Col sm={1} >
//                     <EditDelete queryType='edit' id={props.id} />
//                 </Col>
//                 <Col sm={1}>
//                     <EditDelete queryType='delete' id={props.id} onClick={console.log("click")} />
//                 </Col>
//             </Row>
// 	)
// }


// export default TachesItem