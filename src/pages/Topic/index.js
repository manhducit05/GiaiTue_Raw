import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { useNavigate  } from 'react-router-dom';


function Topic(){
    const navigate = useNavigate ();

    const handleClick = ()=>{
        navigate('/quiz');
    }
    return(
<>
        <Badge bg="secondary">Danh sách chủ đề:</Badge>
        <Table striped bordered hover >
            <thead>
                <tr>
                <th>#</th>
                <th>Danh sách đề thi</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Đề 1</td>
                <td>
                    <Button variant="success" onClick={handleClick}>Làm bài</Button>{' '}
                    <Button variant="warning">Xem kết quả</Button>{' '}
                </td>

                </tr>
                <tr>
                <td>2</td>
                <td>Đề 2</td>
                <td>
                    <Button variant="success" onClick={handleClick}>Làm bài</Button>{' '}
                    <Button variant="warning">Xem kết quả</Button>{' '}
                </td>
                </tr>
            </tbody>
    </Table>
</>
    )
}
export default Topic;