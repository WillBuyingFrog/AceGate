/**
* @author AboveParadise 2022/11/11
*/
import Abstract from "./paper_abstract";
import Data from "./paper_data";
import Op from "./paper_op"
import Reference from "./paper_reference";
import moment from "moment";
import {Box, Link, Text} from "@chakra-ui/react";

function SplitPane(props) {
    let d = {display:'inline-block',float:'left'}
    return (
        <div className="SplitPane1" >
            <div className="SplitPane-left"style={d}>
                {props.left}      </div>
            <div className="SplitPane-right"style={d}>
                {props.right}      </div>
        </div>
    );
}

function PaperDetails() {
    const property = {
        title: "独白与对话:马克思主义中国化的方法论思考",
        author: ["Maple826"],
        keywords: [],
        abstract: "MG 是面向团队的专业 UI/UX 设计工具。多人同时编辑、随时在线评审、设计一键交付，让想法更快实现",

    }
    return(
        <Box>
            <Info/>
            <Abstract/>
            <Data/>
            <Op/>
            <Reference/>
        </Box>
    )
}
function Authors(){
    const property = {
        authors: ["Maple826","AboveParadise","euphoria"],
    }
    return (
        property.authors.map((value, key) => {
            return (
                <Link key={key} href={'/'}
                      textDecoration={'none'}
                      color={'#83a7cf'}
                      mr={7}
                >
                    {value}
                </Link>
            );
        })

   )



}

function Info(){
    const property = {
        title: "独白与对话:马克思主义中国化的方法",
        source: "云南社会科学",
        date: moment("20070112").format('YYYY-MM-DD'),
        keywords: [],
        abstract: "MG 是面向团队的专业 UI/UX 设计工具。多人同时编辑、随时在线评审、设计一键交付，让想法更快实现",

    }
    return(
        <Box ml={'3%'} mb={10}>
            <Box>
            <Text fontSize={30} >
                {property.title}
            </Text>
            </Box>
            <Text   mt={3} mb={3} position={'relative'}>
                {property.date}&nbsp;&nbsp;&nbsp;{property.source}
            </Text>
            <Authors/>

        </Box>
    )
}


export default PaperDetails;