#!/usr/bin/env node
/*
	Copyright (c) 2014 Guilherme Prá Vieira

	This file is part of Octopus.

	Octopus is free software: you can redistribute it and/or modify
	it under the terms of the GNU Affero General Public License as
	published by the Free Software Foundation, either version 3 of
	the License, or (at your option) any later version.

	Octopus is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
	GNU Affero General Public License for more details.

	You should have received a copy of the GNU Affero General Public
	License along with Octopus. If not, see <http://www.gnu.org/licenses/>.
*/
var spawn = require('child_process').spawn;
var server = spawn (
	__dirname + '/node_modules/forever/bin/forever'
	, [
		__dirname + '/octopus.js'
	]
	.concat (
		process.argv.slice(2)
		, '--forever'
	)
);
server.stderr.pipe(process.stderr);
server.stdout.pipe(process.stdout);
server.on('close', process.exit);
