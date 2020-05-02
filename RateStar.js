import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
	MdStar,
	MdStarHalf,
	MdStarBorder,
} from 'react-icons/md'
import times from 'lodash/times'
import map from 'lodash/map'
import toNumber from 'lodash/toNumber'
import uniqueId from 'lodash/uniqueId'
import parseInt from 'lodash/parseInt'
// ---
const RateStar = React.memo(
	({
		// ---
		rateCount,
		ratestyle,
		isDisplayFullStar,
		fullStar,
	}) => {
		// ---
		const starCount = parseInt(rateCount)
		const createArrStarIndex = times(starCount, String)
		const isHarfStar = toNumber(rateCount) - starCount
		const fullStarArr = times(fullStar, String)
		return (
			<RateWrapper>
				{isDisplayFullStar &&
					map(fullStarArr, (_, index) => {
						if (createArrStarIndex[index]) {
							return (
								<StarIcon
									key={`star-icon-${uniqueId()}`}
									ratestyle={
										ratestyle ? ratestyle.star : {}
									}
								/>
							)
						} else {
							if (starCount === index && isHarfStar) {
								return (
									<StarHalfIcon
										key={`star-icon-${uniqueId()}`}
										ratestyle={
											ratestyle ? ratestyle.star : {}
										}
									/>
								)
							}
							return (
								<StarBorderIcon
									key={`star-icon-${uniqueId()}`}
									ratestyle={
										ratestyle ? ratestyle.star : {}
									}
								/>
							)
						}
					})}
				{!isDisplayFullStar && (
					<StarIcon
						ratestyle={ratestyle ? ratestyle.star : {}}
					/>
				)}
				<RateText
					ratestyle={ratestyle ? ratestyle.count : {}}
				>
					{rateCount}
				</RateText>
			</RateWrapper>
		)
	}
)
// ---

RateStar.propTypes = {
	// ---
	rateCount: PropTypes.string,
	ratestyle: PropTypes.object,
	isDisplayFullStar: PropTypes.bool,
	fullStar: PropTypes.number,
}

RateStar.defaultProps = {
	fullStar: 5,
	isDisplayFullStar: false,
}
// ---
export default RateStar
// ---
const RateWrapper = styled.div`
	padding: 0 0px;
	margin-top: 5px;
	margin-bottom: 10px;
`

const RateText = styled.span`
	color: #f5a624;
	font-size: 14px;
	font-family: 'Kanit';
	${({ ratestyle }) => ratestyle}
`

const StarIcon = styled(MdStar)`
	font-size: 16px;
	margin-bottom: -3px;
	margin-right: 3px;
	color: #f5a624;
	${({ ratestyle }) => ratestyle}
`

const StarHalfIcon = styled(MdStarHalf)`
	font-size: 16px;
	margin-bottom: -3px;
	margin-right: 3px;
	color: #f5a624;
	${({ ratestyle }) => ratestyle}
`

const StarBorderIcon = styled(MdStarBorder)`
	font-size: 16px;
	margin-bottom: -3px;
	margin-right: 3px;
	color: #f5a624;
	${({ ratestyle }) => ratestyle}
`
