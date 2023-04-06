import StyledCol from "../styled/styledCol";
import { StyledHead } from "../styled/styledHead";


export default function Head () {
    return (
        <StyledHead>
        <tr>
            <StyledCol>Task</StyledCol>
            <StyledCol>Date</StyledCol>
            <StyledCol>Status</StyledCol>
        </tr>
    </StyledHead>
    )
    
}