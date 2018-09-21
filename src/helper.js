export const toBoolean = (value)  => {
  if (!value) {
    return false;
  }
  if (typeof value == 'number' || typeof value == 'boolean') {
    return !!value;
  }
	return _.replace(_.trim(value.toLowerCase()), /[""'']/ig, '') === 'true' ? true : false;
}