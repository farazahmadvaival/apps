// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import { ReplaySubject } from 'rxjs/ReplaySubject';

const subject = new ReplaySubject(1);

export default subject;
