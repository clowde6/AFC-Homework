const Row = (props) => {
    const {data} = props;

    return (
        <>
            <tr>
                <td>{data.name}</td>
                <td>{data.height}</td>
                <td>{data.hair_color}</td>
                <td>{data.gender}</td>
            </tr>
        </>
    )
}

export default Row;