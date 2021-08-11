import React, {Component} from "react";

import MDFile from "../../postData/about.md";
import ReactMarkdown from "react-markdown";

import CodeBlock from "./CodeBlock";
import "./About.css";

const About = (props) => {
    const [postData, setPostData] = useState("");

    useEffect(() => {
        fetch(MDFile).then(
            MDResource => MDResource.text().then(
                MDText => setPostData(MDText)
            )
        );

        return () => {
            window.scrollTop = 0;
        }
    }, []);
    const BlockQuoteBlock = (props) => {
        return (
            <div className="quoteBlock" style={{}}>
                {props.children}
            </div>
        );
    }

    const InlineCodeBlock = (props) => {
        return(
            <span className="inlineCodeBlock">
                {props.value}
            </span>
        )
    }
    
    const TableCellBlock = (props) => {
        let style ={
            textAlign: props.align ? props.align : "center",
            padding: 5
        };
    
        if (props.isHeader){
            style.background = "#ffff00";
            style.border = "1px solid #cccccc";
            style.borderLeft = 0;
            style.borderRight = 0;
        }else{
            style.borderBottom = "1px solid #eeeeee";
        }
    
        return(
            <td style={style}>
                {props.children}
            </td>
        );
    }

    return(
        <div align="center">
            <div className="AboutContent">
                <div className="markdown-body-about">
                    <ReactMarkdown
                        source={postData}

                        allowDangerousHtml={true}
                        escapeHtml={false}
                        skipHtml={false}
                        renderers={{
                            blockquote: BlockQuoteBlock,
                            code: CodeBlock,
                            inlineCode: InlineCodeBlock,
                            tableCell: TableCellBlock
                        }} />
                </div>
            </div>
        </div>
    )
}

// class About extends Component {
//     constructor() {
//         super();
//         this.state = { markdown: "" };
//     }

//     UNSAFE_componentWillMount() {
//         fetch(MDFile).then(res => res.text()).then(text => this.setState({ markdown: text }));
//     }

//     render() {
//         function BlockQuoteBlock(props) {
//             return (
//                 <div className="quoteBlock" style={{}}>
//                     {props.children}
//                 </div>
//             );
//         }

//         function InlineCodeBlock(props){
//             return(
//                 <span className="inlineCodeBlock">
//                     {props.value}
//                 </span>
//             )
//         }
        
//         function TableCellBlock(props) {
//             let style = {
//                 textAlign: props.align ? props.align : "center",
//                 padding: 5
//             };
        
//             if (props.isHeader) {
//                 style.background = "#ffff00";
//                 style.border = "1px solid #cccccc";
//                 style.borderLeft = 0;
//                 style.borderRight = 0;
//             }else{
//                 style.borderBottom = "1px solid #eeeeee";
//             }
        
//             return (
//                 <td style={style}>
//                     {props.children}
//                 </td>
//             );
//         }

//         const {markdown} = this.state;

//         return(
//             <div align="center">
//                 <div className="AboutContent">
//                     <div className="markdown-body-about">
//                         <ReactMarkdown
//                             source={markdown}

//                             allowDangerousHtml={true}
//                             escapeHtml={false}
//                             skipHtml={false}
//                             renderers={{
//                                 blockquote: BlockQuoteBlock,
//                                 code: CodeBlock,
//                                 inlineCode: InlineCodeBlock,
//                                 tableCell: TableCellBlock
//                           }} />
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

export default About;