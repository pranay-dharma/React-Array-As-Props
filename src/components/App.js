
import PropTypes from 'prop-types';

function Join({words}) {
  return (
   <div>{words.join(",")}</div>

  )
}

export default Join;
Join.propTypes = {
  words: PropTypes.array
};
