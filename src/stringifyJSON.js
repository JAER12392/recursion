// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
        // your code goes here

        var stringify = '';

        if (obj === null) {
            stringify += 'null';
            return stringify;
        } else if (obj === true) {
            stringify += 'true';
            return stringify;
        } else if (obj === false) {
            stringify += 'false';
            return stringify;
        } else if (typeof obj === 'number') {
            stringify += "" + obj;
            return stringify;
        } else if (typeof obj === 'string') {
            stringify += '"' + obj + '"';
            return stringify;
        } else if (Array.isArray(obj)) {
            stringify += '[';
            for (var i = 0; i < obj.length; i++) {
                stringify = stringify + stringifyJSON(obj[i]);
                if (i + 1 < obj.length) {
                    stringify += ',';
                }
            }
            stringify += ']';
            return stringify;
        } else if (typeof obj === 'object' && !(null)) {
            stringify += "{";
            var index = 0;
            //JSON.stringify({ x: 5, l: 6 });            // '{"x":5}'
            for (var key in obj) {
                if (stringifyJSON(obj[key])) {
                    stringify += '"' + key + '":' + stringifyJSON(obj[key]);
                    if (index + 1 < Object.keys(obj).length) {
                        stringify += ',';

                    }

                    index++;

                }


                
            }
            stringify += "}";
            
        }
        return stringify;

    };


        
