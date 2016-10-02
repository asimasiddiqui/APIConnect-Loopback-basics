// CommonJS package manager support
if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports === exports) {
  // Export the *name* of this Angular module
  // Sample usage:
  //
  //   import lbServices from './lb-services';
  //   angular.module('app', [lbServices]);
  //
  module.exports = "lbServices";
}

(function(window, angular, undefined) {'use strict';

var urlBase = "/kicksApi";
var authHeader = 'authorization';

function getHost(url) {
  var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
  return m ? m[1] : null;
}

var urlBaseHost = getHost(urlBase) || location.host;

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.Shoe
 * @header lbServices.Shoe
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Shoe` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Shoe",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/shoes/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Shoe.reviews.findById() instead.
        "prototype$__findById__reviews": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/shoes/:id/reviews/:fk",
          method: "GET"
        },

        // INTERNAL. Use Shoe.reviews.destroyById() instead.
        "prototype$__destroyById__reviews": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/shoes/:id/reviews/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Shoe.reviews.updateById() instead.
        "prototype$__updateById__reviews": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/shoes/:id/reviews/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Shoe.reviewers.findById() instead.
        "prototype$__findById__reviewers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/shoes/:id/reviewers/:fk",
          method: "GET"
        },

        // INTERNAL. Use Shoe.reviewers.destroyById() instead.
        "prototype$__destroyById__reviewers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/shoes/:id/reviewers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Shoe.reviewers.updateById() instead.
        "prototype$__updateById__reviewers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/shoes/:id/reviewers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Shoe.reviews() instead.
        "prototype$__get__reviews": {
          isArray: true,
          url: urlBase + "/shoes/:id/reviews",
          method: "GET"
        },

        // INTERNAL. Use Shoe.reviews.create() instead.
        "prototype$__create__reviews": {
          url: urlBase + "/shoes/:id/reviews",
          method: "POST"
        },

        // INTERNAL. Use Shoe.reviews.destroyAll() instead.
        "prototype$__delete__reviews": {
          url: urlBase + "/shoes/:id/reviews",
          method: "DELETE"
        },

        // INTERNAL. Use Shoe.reviews.count() instead.
        "prototype$__count__reviews": {
          url: urlBase + "/shoes/:id/reviews/count",
          method: "GET"
        },

        // INTERNAL. Use Shoe.reviewers() instead.
        "prototype$__get__reviewers": {
          isArray: true,
          url: urlBase + "/shoes/:id/reviewers",
          method: "GET"
        },

        // INTERNAL. Use Shoe.reviewers.create() instead.
        "prototype$__create__reviewers": {
          url: urlBase + "/shoes/:id/reviewers",
          method: "POST"
        },

        // INTERNAL. Use Shoe.reviewers.destroyAll() instead.
        "prototype$__delete__reviewers": {
          url: urlBase + "/shoes/:id/reviewers",
          method: "DELETE"
        },

        // INTERNAL. Use Shoe.reviewers.count() instead.
        "prototype$__count__reviewers": {
          url: urlBase + "/shoes/:id/reviewers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Shoe#create
         * @methodOf lbServices.Shoe
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shoe` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/shoes",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Shoe#createMany
         * @methodOf lbServices.Shoe
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shoe` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/shoes",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Shoe#upsert
         * @methodOf lbServices.Shoe
         *
         * @description
         *
         * Patch an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `data` – `{object=}` - Model instance data
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shoe` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/shoes",
          method: "PATCH"
        },

        /**
         * @ngdoc method
         * @name lbServices.Shoe#replaceOrCreate
         * @methodOf lbServices.Shoe
         *
         * @description
         *
         * Replace an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shoe` object.)
         * </em>
         */
        "replaceOrCreate": {
          url: urlBase + "/shoes/replaceOrCreate",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Shoe#exists
         * @methodOf lbServices.Shoe
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/shoes/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Shoe#findById
         * @methodOf lbServices.Shoe
         *
         * @description
         *
         * Find a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shoe` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/shoes/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Shoe#replaceById
         * @methodOf lbServices.Shoe
         *
         * @description
         *
         * Replace attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shoe` object.)
         * </em>
         */
        "replaceById": {
          url: urlBase + "/shoes/:id/replace",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Shoe#find
         * @methodOf lbServices.Shoe
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shoe` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/shoes",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Shoe#findOne
         * @methodOf lbServices.Shoe
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shoe` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/shoes/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Shoe#updateAll
         * @methodOf lbServices.Shoe
         *
         * @description
         *
         * Update instances of the model matched by {{where}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/shoes/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Shoe#deleteById
         * @methodOf lbServices.Shoe
         *
         * @description
         *
         * Delete a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shoe` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/shoes/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Shoe#count
         * @methodOf lbServices.Shoe
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/shoes/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Shoe#prototype$updateAttributes
         * @methodOf lbServices.Shoe
         *
         * @description
         *
         * Patch attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `data` – `{object=}` - An object of model property name/value pairs
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shoe` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/shoes/:id",
          method: "PATCH"
        },

        /**
         * @ngdoc method
         * @name lbServices.Shoe#createChangeStream
         * @methodOf lbServices.Shoe
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/shoes/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Review.shoe() instead.
        "::get::review::shoe": {
          url: urlBase + "/reviews/:id/shoe",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Shoe#patchOrCreate
         * @methodOf lbServices.Shoe
         *
         * @description
         *
         * Patch an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `data` – `{object=}` - Model instance data
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shoe` object.)
         * </em>
         */
        R["patchOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Shoe#updateOrCreate
         * @methodOf lbServices.Shoe
         *
         * @description
         *
         * Patch an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `data` – `{object=}` - Model instance data
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shoe` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Shoe#update
         * @methodOf lbServices.Shoe
         *
         * @description
         *
         * Update instances of the model matched by {{where}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Shoe#destroyById
         * @methodOf lbServices.Shoe
         *
         * @description
         *
         * Delete a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shoe` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Shoe#removeById
         * @methodOf lbServices.Shoe
         *
         * @description
         *
         * Delete a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shoe` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Shoe#patchAttributes
         * @methodOf lbServices.Shoe
         *
         * @description
         *
         * Patch attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `data` – `{object=}` - An object of model property name/value pairs
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shoe` object.)
         * </em>
         */
        R["patchAttributes"] = R["prototype$updateAttributes"];


    /**
    * @ngdoc property
    * @name lbServices.Shoe#modelName
    * @propertyOf lbServices.Shoe
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Shoe`.
    */
    R.modelName = "Shoe";

    /**
     * @ngdoc object
     * @name lbServices.Shoe.reviews
     * @header lbServices.Shoe.reviews
     * @object
     * @description
     *
     * The object `Shoe.reviews` groups methods
     * manipulating `Review` instances related to `Shoe`.
     *
     * Call {@link lbServices.Shoe#reviews Shoe.reviews()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Shoe#reviews
         * @methodOf lbServices.Shoe
         *
         * @description
         *
         * Queries reviews of shoe.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Review` object.)
         * </em>
         */
        R.reviews = function() {
          var TargetResource = $injector.get("Review");
          var action = TargetResource["::get::shoe::reviews"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Shoe.reviews#count
         * @methodOf lbServices.Shoe.reviews
         *
         * @description
         *
         * Counts reviews of shoe.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.reviews.count = function() {
          var TargetResource = $injector.get("Review");
          var action = TargetResource["::count::shoe::reviews"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Shoe.reviews#create
         * @methodOf lbServices.Shoe.reviews
         *
         * @description
         *
         * Creates a new instance in reviews of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Review` object.)
         * </em>
         */
        R.reviews.create = function() {
          var TargetResource = $injector.get("Review");
          var action = TargetResource["::create::shoe::reviews"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Shoe.reviews#createMany
         * @methodOf lbServices.Shoe.reviews
         *
         * @description
         *
         * Creates a new instance in reviews of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Review` object.)
         * </em>
         */
        R.reviews.createMany = function() {
          var TargetResource = $injector.get("Review");
          var action = TargetResource["::createMany::shoe::reviews"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Shoe.reviews#destroyAll
         * @methodOf lbServices.Shoe.reviews
         *
         * @description
         *
         * Deletes all reviews of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.reviews.destroyAll = function() {
          var TargetResource = $injector.get("Review");
          var action = TargetResource["::delete::shoe::reviews"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Shoe.reviews#destroyById
         * @methodOf lbServices.Shoe.reviews
         *
         * @description
         *
         * Delete a related item by id for reviews.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for reviews
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.reviews.destroyById = function() {
          var TargetResource = $injector.get("Review");
          var action = TargetResource["::destroyById::shoe::reviews"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Shoe.reviews#findById
         * @methodOf lbServices.Shoe.reviews
         *
         * @description
         *
         * Find a related item by id for reviews.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for reviews
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Review` object.)
         * </em>
         */
        R.reviews.findById = function() {
          var TargetResource = $injector.get("Review");
          var action = TargetResource["::findById::shoe::reviews"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Shoe.reviews#updateById
         * @methodOf lbServices.Shoe.reviews
         *
         * @description
         *
         * Update a related item by id for reviews.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for reviews
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Review` object.)
         * </em>
         */
        R.reviews.updateById = function() {
          var TargetResource = $injector.get("Review");
          var action = TargetResource["::updateById::shoe::reviews"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Shoe.reviewers
     * @header lbServices.Shoe.reviewers
     * @object
     * @description
     *
     * The object `Shoe.reviewers` groups methods
     * manipulating `Reviewer` instances related to `Shoe`.
     *
     * Call {@link lbServices.Shoe#reviewers Shoe.reviewers()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Shoe#reviewers
         * @methodOf lbServices.Shoe
         *
         * @description
         *
         * Queries reviewers of shoe.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reviewer` object.)
         * </em>
         */
        R.reviewers = function() {
          var TargetResource = $injector.get("Reviewer");
          var action = TargetResource["::get::shoe::reviewers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Shoe.reviewers#count
         * @methodOf lbServices.Shoe.reviewers
         *
         * @description
         *
         * Counts reviewers of shoe.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.reviewers.count = function() {
          var TargetResource = $injector.get("Reviewer");
          var action = TargetResource["::count::shoe::reviewers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Shoe.reviewers#create
         * @methodOf lbServices.Shoe.reviewers
         *
         * @description
         *
         * Creates a new instance in reviewers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reviewer` object.)
         * </em>
         */
        R.reviewers.create = function() {
          var TargetResource = $injector.get("Reviewer");
          var action = TargetResource["::create::shoe::reviewers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Shoe.reviewers#createMany
         * @methodOf lbServices.Shoe.reviewers
         *
         * @description
         *
         * Creates a new instance in reviewers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reviewer` object.)
         * </em>
         */
        R.reviewers.createMany = function() {
          var TargetResource = $injector.get("Reviewer");
          var action = TargetResource["::createMany::shoe::reviewers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Shoe.reviewers#destroyAll
         * @methodOf lbServices.Shoe.reviewers
         *
         * @description
         *
         * Deletes all reviewers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.reviewers.destroyAll = function() {
          var TargetResource = $injector.get("Reviewer");
          var action = TargetResource["::delete::shoe::reviewers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Shoe.reviewers#destroyById
         * @methodOf lbServices.Shoe.reviewers
         *
         * @description
         *
         * Delete a related item by id for reviewers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for reviewers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.reviewers.destroyById = function() {
          var TargetResource = $injector.get("Reviewer");
          var action = TargetResource["::destroyById::shoe::reviewers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Shoe.reviewers#findById
         * @methodOf lbServices.Shoe.reviewers
         *
         * @description
         *
         * Find a related item by id for reviewers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for reviewers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reviewer` object.)
         * </em>
         */
        R.reviewers.findById = function() {
          var TargetResource = $injector.get("Reviewer");
          var action = TargetResource["::findById::shoe::reviewers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Shoe.reviewers#updateById
         * @methodOf lbServices.Shoe.reviewers
         *
         * @description
         *
         * Update a related item by id for reviewers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for reviewers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reviewer` object.)
         * </em>
         */
        R.reviewers.updateById = function() {
          var TargetResource = $injector.get("Reviewer");
          var action = TargetResource["::updateById::shoe::reviewers"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Review
 * @header lbServices.Review
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Review` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Review",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/reviews/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Review.shoe() instead.
        "prototype$__get__shoe": {
          url: urlBase + "/reviews/:id/shoe",
          method: "GET"
        },

        // INTERNAL. Use Review.reviewer() instead.
        "prototype$__get__reviewer": {
          url: urlBase + "/reviews/:id/reviewer",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Review#create
         * @methodOf lbServices.Review
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Review` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/reviews",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Review#createMany
         * @methodOf lbServices.Review
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Review` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/reviews",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Review#upsert
         * @methodOf lbServices.Review
         *
         * @description
         *
         * Patch an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `data` – `{object=}` - Model instance data
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Review` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/reviews",
          method: "PATCH"
        },

        /**
         * @ngdoc method
         * @name lbServices.Review#replaceOrCreate
         * @methodOf lbServices.Review
         *
         * @description
         *
         * Replace an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Review` object.)
         * </em>
         */
        "replaceOrCreate": {
          url: urlBase + "/reviews/replaceOrCreate",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Review#exists
         * @methodOf lbServices.Review
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/reviews/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Review#findById
         * @methodOf lbServices.Review
         *
         * @description
         *
         * Find a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Review` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/reviews/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Review#replaceById
         * @methodOf lbServices.Review
         *
         * @description
         *
         * Replace attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Review` object.)
         * </em>
         */
        "replaceById": {
          url: urlBase + "/reviews/:id/replace",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Review#find
         * @methodOf lbServices.Review
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Review` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/reviews",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Review#findOne
         * @methodOf lbServices.Review
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Review` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/reviews/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Review#updateAll
         * @methodOf lbServices.Review
         *
         * @description
         *
         * Update instances of the model matched by {{where}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/reviews/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Review#deleteById
         * @methodOf lbServices.Review
         *
         * @description
         *
         * Delete a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Review` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/reviews/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Review#count
         * @methodOf lbServices.Review
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/reviews/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Review#prototype$updateAttributes
         * @methodOf lbServices.Review
         *
         * @description
         *
         * Patch attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `data` – `{object=}` - An object of model property name/value pairs
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Review` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/reviews/:id",
          method: "PATCH"
        },

        /**
         * @ngdoc method
         * @name lbServices.Review#createChangeStream
         * @methodOf lbServices.Review
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/reviews/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Shoe.reviews.findById() instead.
        "::findById::shoe::reviews": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/shoes/:id/reviews/:fk",
          method: "GET"
        },

        // INTERNAL. Use Shoe.reviews.destroyById() instead.
        "::destroyById::shoe::reviews": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/shoes/:id/reviews/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Shoe.reviews.updateById() instead.
        "::updateById::shoe::reviews": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/shoes/:id/reviews/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Shoe.reviews() instead.
        "::get::shoe::reviews": {
          isArray: true,
          url: urlBase + "/shoes/:id/reviews",
          method: "GET"
        },

        // INTERNAL. Use Shoe.reviews.create() instead.
        "::create::shoe::reviews": {
          url: urlBase + "/shoes/:id/reviews",
          method: "POST"
        },

        // INTERNAL. Use Shoe.reviews.createMany() instead.
        "::createMany::shoe::reviews": {
          isArray: true,
          url: urlBase + "/shoes/:id/reviews",
          method: "POST"
        },

        // INTERNAL. Use Shoe.reviews.destroyAll() instead.
        "::delete::shoe::reviews": {
          url: urlBase + "/shoes/:id/reviews",
          method: "DELETE"
        },

        // INTERNAL. Use Shoe.reviews.count() instead.
        "::count::shoe::reviews": {
          url: urlBase + "/shoes/:id/reviews/count",
          method: "GET"
        },

        // INTERNAL. Use Reviewer.reviews.findById() instead.
        "::findById::reviewer::reviews": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/reviewers/:id/reviews/:fk",
          method: "GET"
        },

        // INTERNAL. Use Reviewer.reviews.destroyById() instead.
        "::destroyById::reviewer::reviews": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/reviewers/:id/reviews/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Reviewer.reviews.updateById() instead.
        "::updateById::reviewer::reviews": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/reviewers/:id/reviews/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Reviewer.reviews() instead.
        "::get::reviewer::reviews": {
          isArray: true,
          url: urlBase + "/reviewers/:id/reviews",
          method: "GET"
        },

        // INTERNAL. Use Reviewer.reviews.create() instead.
        "::create::reviewer::reviews": {
          url: urlBase + "/reviewers/:id/reviews",
          method: "POST"
        },

        // INTERNAL. Use Reviewer.reviews.createMany() instead.
        "::createMany::reviewer::reviews": {
          isArray: true,
          url: urlBase + "/reviewers/:id/reviews",
          method: "POST"
        },

        // INTERNAL. Use Reviewer.reviews.destroyAll() instead.
        "::delete::reviewer::reviews": {
          url: urlBase + "/reviewers/:id/reviews",
          method: "DELETE"
        },

        // INTERNAL. Use Reviewer.reviews.count() instead.
        "::count::reviewer::reviews": {
          url: urlBase + "/reviewers/:id/reviews/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Review#patchOrCreate
         * @methodOf lbServices.Review
         *
         * @description
         *
         * Patch an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `data` – `{object=}` - Model instance data
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Review` object.)
         * </em>
         */
        R["patchOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Review#updateOrCreate
         * @methodOf lbServices.Review
         *
         * @description
         *
         * Patch an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `data` – `{object=}` - Model instance data
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Review` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Review#update
         * @methodOf lbServices.Review
         *
         * @description
         *
         * Update instances of the model matched by {{where}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Review#destroyById
         * @methodOf lbServices.Review
         *
         * @description
         *
         * Delete a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Review` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Review#removeById
         * @methodOf lbServices.Review
         *
         * @description
         *
         * Delete a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Review` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Review#patchAttributes
         * @methodOf lbServices.Review
         *
         * @description
         *
         * Patch attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `data` – `{object=}` - An object of model property name/value pairs
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Review` object.)
         * </em>
         */
        R["patchAttributes"] = R["prototype$updateAttributes"];


    /**
    * @ngdoc property
    * @name lbServices.Review#modelName
    * @propertyOf lbServices.Review
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Review`.
    */
    R.modelName = "Review";


        /**
         * @ngdoc method
         * @name lbServices.Review#shoe
         * @methodOf lbServices.Review
         *
         * @description
         *
         * Fetches belongsTo relation shoe.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shoe` object.)
         * </em>
         */
        R.shoe = function() {
          var TargetResource = $injector.get("Shoe");
          var action = TargetResource["::get::review::shoe"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Review#reviewer
         * @methodOf lbServices.Review
         *
         * @description
         *
         * Fetches belongsTo relation reviewer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reviewer` object.)
         * </em>
         */
        R.reviewer = function() {
          var TargetResource = $injector.get("Reviewer");
          var action = TargetResource["::get::review::reviewer"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Reviewer
 * @header lbServices.Reviewer
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Reviewer` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Reviewer",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/reviewers/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Reviewer.reviews.findById() instead.
        "prototype$__findById__reviews": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/reviewers/:id/reviews/:fk",
          method: "GET"
        },

        // INTERNAL. Use Reviewer.reviews.destroyById() instead.
        "prototype$__destroyById__reviews": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/reviewers/:id/reviews/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Reviewer.reviews.updateById() instead.
        "prototype$__updateById__reviews": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/reviewers/:id/reviews/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Reviewer.reviews() instead.
        "prototype$__get__reviews": {
          isArray: true,
          url: urlBase + "/reviewers/:id/reviews",
          method: "GET"
        },

        // INTERNAL. Use Reviewer.reviews.create() instead.
        "prototype$__create__reviews": {
          url: urlBase + "/reviewers/:id/reviews",
          method: "POST"
        },

        // INTERNAL. Use Reviewer.reviews.destroyAll() instead.
        "prototype$__delete__reviews": {
          url: urlBase + "/reviewers/:id/reviews",
          method: "DELETE"
        },

        // INTERNAL. Use Reviewer.reviews.count() instead.
        "prototype$__count__reviews": {
          url: urlBase + "/reviewers/:id/reviews/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Reviewer#create
         * @methodOf lbServices.Reviewer
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reviewer` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/reviewers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Reviewer#createMany
         * @methodOf lbServices.Reviewer
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reviewer` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/reviewers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Reviewer#upsert
         * @methodOf lbServices.Reviewer
         *
         * @description
         *
         * Patch an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `data` – `{object=}` - Model instance data
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reviewer` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/reviewers",
          method: "PATCH"
        },

        /**
         * @ngdoc method
         * @name lbServices.Reviewer#replaceOrCreate
         * @methodOf lbServices.Reviewer
         *
         * @description
         *
         * Replace an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reviewer` object.)
         * </em>
         */
        "replaceOrCreate": {
          url: urlBase + "/reviewers/replaceOrCreate",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Reviewer#exists
         * @methodOf lbServices.Reviewer
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/reviewers/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Reviewer#findById
         * @methodOf lbServices.Reviewer
         *
         * @description
         *
         * Find a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reviewer` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/reviewers/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Reviewer#replaceById
         * @methodOf lbServices.Reviewer
         *
         * @description
         *
         * Replace attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reviewer` object.)
         * </em>
         */
        "replaceById": {
          url: urlBase + "/reviewers/:id/replace",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Reviewer#find
         * @methodOf lbServices.Reviewer
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reviewer` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/reviewers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Reviewer#findOne
         * @methodOf lbServices.Reviewer
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reviewer` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/reviewers/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Reviewer#updateAll
         * @methodOf lbServices.Reviewer
         *
         * @description
         *
         * Update instances of the model matched by {{where}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/reviewers/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Reviewer#deleteById
         * @methodOf lbServices.Reviewer
         *
         * @description
         *
         * Delete a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reviewer` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/reviewers/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Reviewer#count
         * @methodOf lbServices.Reviewer
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/reviewers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Reviewer#prototype$updateAttributes
         * @methodOf lbServices.Reviewer
         *
         * @description
         *
         * Patch attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `data` – `{object=}` - An object of model property name/value pairs
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reviewer` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/reviewers/:id",
          method: "PATCH"
        },

        /**
         * @ngdoc method
         * @name lbServices.Reviewer#createChangeStream
         * @methodOf lbServices.Reviewer
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/reviewers/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Reviewer#login
         * @methodOf lbServices.Reviewer
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `U+007BUserU+007D` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/reviewers/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Reviewer#logout
         * @methodOf lbServices.Reviewer
         *
         * @description
         *
         * Logout a user with access token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/reviewers/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Reviewer#confirm
         * @methodOf lbServices.Reviewer
         *
         * @description
         *
         * Confirm a user registration with email verification token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/reviewers/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Reviewer#resetPassword
         * @methodOf lbServices.Reviewer
         *
         * @description
         *
         * Reset password for a user with email.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/reviewers/reset",
          method: "POST"
        },

        // INTERNAL. Use Shoe.reviewers.findById() instead.
        "::findById::shoe::reviewers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/shoes/:id/reviewers/:fk",
          method: "GET"
        },

        // INTERNAL. Use Shoe.reviewers.destroyById() instead.
        "::destroyById::shoe::reviewers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/shoes/:id/reviewers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Shoe.reviewers.updateById() instead.
        "::updateById::shoe::reviewers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/shoes/:id/reviewers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Shoe.reviewers() instead.
        "::get::shoe::reviewers": {
          isArray: true,
          url: urlBase + "/shoes/:id/reviewers",
          method: "GET"
        },

        // INTERNAL. Use Shoe.reviewers.create() instead.
        "::create::shoe::reviewers": {
          url: urlBase + "/shoes/:id/reviewers",
          method: "POST"
        },

        // INTERNAL. Use Shoe.reviewers.createMany() instead.
        "::createMany::shoe::reviewers": {
          isArray: true,
          url: urlBase + "/shoes/:id/reviewers",
          method: "POST"
        },

        // INTERNAL. Use Shoe.reviewers.destroyAll() instead.
        "::delete::shoe::reviewers": {
          url: urlBase + "/shoes/:id/reviewers",
          method: "DELETE"
        },

        // INTERNAL. Use Shoe.reviewers.count() instead.
        "::count::shoe::reviewers": {
          url: urlBase + "/shoes/:id/reviewers/count",
          method: "GET"
        },

        // INTERNAL. Use Review.reviewer() instead.
        "::get::review::reviewer": {
          url: urlBase + "/reviews/:id/reviewer",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Reviewer#getCurrent
         * @methodOf lbServices.Reviewer
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/reviewers" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Reviewer#patchOrCreate
         * @methodOf lbServices.Reviewer
         *
         * @description
         *
         * Patch an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `data` – `{object=}` - Model instance data
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reviewer` object.)
         * </em>
         */
        R["patchOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Reviewer#updateOrCreate
         * @methodOf lbServices.Reviewer
         *
         * @description
         *
         * Patch an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `data` – `{object=}` - Model instance data
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reviewer` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Reviewer#update
         * @methodOf lbServices.Reviewer
         *
         * @description
         *
         * Update instances of the model matched by {{where}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Reviewer#destroyById
         * @methodOf lbServices.Reviewer
         *
         * @description
         *
         * Delete a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reviewer` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Reviewer#removeById
         * @methodOf lbServices.Reviewer
         *
         * @description
         *
         * Delete a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reviewer` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Reviewer#patchAttributes
         * @methodOf lbServices.Reviewer
         *
         * @description
         *
         * Patch attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `data` – `{object=}` - An object of model property name/value pairs
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reviewer` object.)
         * </em>
         */
        R["patchAttributes"] = R["prototype$updateAttributes"];

        /**
         * @ngdoc method
         * @name lbServices.Reviewer#getCachedCurrent
         * @methodOf lbServices.Reviewer
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.Reviewer#login} or
         * {@link lbServices.Reviewer#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A Reviewer instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Reviewer#isAuthenticated
         * @methodOf lbServices.Reviewer
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Reviewer#getCurrentId
         * @methodOf lbServices.Reviewer
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.Reviewer#modelName
    * @propertyOf lbServices.Reviewer
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Reviewer`.
    */
    R.modelName = "Reviewer";

    /**
     * @ngdoc object
     * @name lbServices.Reviewer.reviews
     * @header lbServices.Reviewer.reviews
     * @object
     * @description
     *
     * The object `Reviewer.reviews` groups methods
     * manipulating `Review` instances related to `Reviewer`.
     *
     * Call {@link lbServices.Reviewer#reviews Reviewer.reviews()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Reviewer#reviews
         * @methodOf lbServices.Reviewer
         *
         * @description
         *
         * Queries reviews of reviewer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Review` object.)
         * </em>
         */
        R.reviews = function() {
          var TargetResource = $injector.get("Review");
          var action = TargetResource["::get::reviewer::reviews"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Reviewer.reviews#count
         * @methodOf lbServices.Reviewer.reviews
         *
         * @description
         *
         * Counts reviews of reviewer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.reviews.count = function() {
          var TargetResource = $injector.get("Review");
          var action = TargetResource["::count::reviewer::reviews"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Reviewer.reviews#create
         * @methodOf lbServices.Reviewer.reviews
         *
         * @description
         *
         * Creates a new instance in reviews of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Review` object.)
         * </em>
         */
        R.reviews.create = function() {
          var TargetResource = $injector.get("Review");
          var action = TargetResource["::create::reviewer::reviews"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Reviewer.reviews#createMany
         * @methodOf lbServices.Reviewer.reviews
         *
         * @description
         *
         * Creates a new instance in reviews of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Review` object.)
         * </em>
         */
        R.reviews.createMany = function() {
          var TargetResource = $injector.get("Review");
          var action = TargetResource["::createMany::reviewer::reviews"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Reviewer.reviews#destroyAll
         * @methodOf lbServices.Reviewer.reviews
         *
         * @description
         *
         * Deletes all reviews of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.reviews.destroyAll = function() {
          var TargetResource = $injector.get("Review");
          var action = TargetResource["::delete::reviewer::reviews"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Reviewer.reviews#destroyById
         * @methodOf lbServices.Reviewer.reviews
         *
         * @description
         *
         * Delete a related item by id for reviews.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for reviews
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.reviews.destroyById = function() {
          var TargetResource = $injector.get("Review");
          var action = TargetResource["::destroyById::reviewer::reviews"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Reviewer.reviews#findById
         * @methodOf lbServices.Reviewer.reviews
         *
         * @description
         *
         * Find a related item by id for reviews.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for reviews
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Review` object.)
         * </em>
         */
        R.reviews.findById = function() {
          var TargetResource = $injector.get("Review");
          var action = TargetResource["::findById::reviewer::reviews"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Reviewer.reviews#updateById
         * @methodOf lbServices.Reviewer.reviews
         *
         * @description
         *
         * Update a related item by id for reviews.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for reviews
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Review` object.)
         * </em>
         */
        R.reviews.updateById = function() {
          var TargetResource = $injector.get("Review");
          var action = TargetResource["::updateById::reviewer::reviews"];
          return action.apply(R, arguments);
        };

    return R;
  }]);


module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId', 'rememberMe'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    }

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      try {
        var key = propsPrefix + name;
        if (value == null) value = '';
        storage[key] = value;
      } catch(err) {
        console.log('Cannot access local/session storage:', err);
      }
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {

          // filter out external requests
          var host = getHost(config.url);
          if (host && host !== urlBaseHost) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
      urlBaseHost = getHost(urlBase) || location.host;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      return function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };
    }];
  });

})(window, window.angular);
