/**
 * @author AboveParadise 2022/11/11
 */
import {Box, Link, Text} from '@chakra-ui/react'
import Op from "./paper_op"
function Keywords(){
    const property = {
        kw:'关键词：',
        keywords: ["马克思","中国化","方法论"],
    }
    let k = [property.kw, ...property.keywords].join('\t\t');

    return ( <Text textDecoration={'none'}
                   color={'#161616'}
                   margin={8}

                   fontSize={18}>{k}</Text>
    )

}
function Abstract() {
    const property = {
        abs:'摘要',
        kw:'关键词：',
        keywords: ["马克思","中国化","方法论"],
        abstract: "近年来，人工智能临床应用研究进展迅猛，有望为提升疾病防控水平，促进健康中国建设提供重要支撑。本文基于文献研究、专题研讨、专家访谈，从战略布局、研发实力、产品创新、临床应用等方面分析我国人工智能临床应用研究进展。研究发现：我国在该领域研发实力显著增强，学术产出与技术创新水平进入国际第一方阵。其中，申请、公开的专利数分别由2011年的137项、26项增长至2021年的2484项和2909项，均跃居全球首位。发表论文数由2011年的43篇逐年快速增长至2021年的4597篇，仅次于美国。我国医疗人工智能产品研究不断取得创新突破，相关产品的智能化程度不断提高，正在从研究阶段走向应用层面，支撑临床实践提质增效。我国在人工智能临床研究领域也存在一定的问题和短板，主要包括：1)重大原创成果较少，核心技术、关键设备受制于人；2)产品研发临床驱动不足，临床应用场景单一；3)医疗数据质量不高，数据标准与共享机制不健全；4)评价与监管体系不健全，伦理制度与法律法规待完善。对此，提出建议，包括：1)加强顶层设计，统筹国家科技计划系统布局；2)规范数据标准，培育医疗数据建设与共享新业态；3)完善法律法规，优化认证评估与安全监管体系；4)加强人才培育，打造医学人工智能复合型人才团队"

    }

    return(
        <Box
            // height={'200'}
            width={'55%'}
            borderWidth={'5'}
            borderRadius={'12'}
            borderStyle={'solid'}
            marginLeft={'3%'}
            color={'#E2E8F0'}
            boxShadow={'0 2px 10px rgb(0 0 0 / 10%)'}
            position={'absolute'}
        >
            <Text textDecoration={'none'}
                  color={'#161616'}
                  fontSize={'25'}
                  m={3}
                  ml={8}
            >
                {property.abs}
            </Text>

            <Text ml={8} color={'#161616'}
                  fontSize={'15'} noOfLines={5}
            maxW={850} mr={8}>{property.abstract}</Text>

            <Keywords/>


        </Box>

    )
}


export default Abstract;