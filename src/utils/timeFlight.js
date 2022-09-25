const timeFlight = (segment) => Math.trunc(Math.trunc(segment.duration / 60) / 24) > 0
    ? Math.trunc(Math.trunc(segment.duration / 60) / 24) + 'д ' + Math.trunc(segment.duration / 60) % 24 + 'ч ' + segment.duration % 60 + 'м'
    : Math.trunc(segment.duration / 60) % 24 + 'ч ' + segment.duration % 60 + 'м';

export default timeFlight;