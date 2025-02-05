import ApplicationController from './application_controller'

/* This is the custom StimulusReflex controller for the Employee Reflex.
 * Learn more at: https://docs.stimulusreflex.com
 */
export default class extends ApplicationController {
  /*
   * Regular Stimulus lifecycle methods
   * Learn more at: https://stimulusjs.org/reference/lifecycle-callbacks
   *
   * If you intend to use this controller as a regular stimulus controller as well,
   * make sure any Stimulus lifecycle methods overridden in ApplicationController call super.
   *
   * Important:
   * By default, StimulusReflex overrides the -connect- method so make sure you
   * call super if you intend to do anything else when this controller connects.
   */

  connect() {
    super.connect()
    // add your code here, if applicable
  }

  /* Reflex specific lifecycle methods.
   *
   * For every method defined in your Reflex class, a matching set of lifecycle methods become available
   * in this javascript controller. These are optional, so feel free to delete these stubs if you don't
   * need them.
   *
   * Important:
   * Make sure to add data-controller="employee" to your markup alongside
   * data-reflex="Employee#dance" for the lifecycle methods to fire properly.
   *
   * Example:
   *
   *   <a href="#" data-reflex="click->Employee#dance" data-controller="employee">Dance!</a>
   *
   * Arguments:
   *
   *   element - the element that triggered the reflex
   *             may be different than the Stimulus controller's this.element
   *
   *   reflex - the name of the reflex e.g. "Employee#dance"
   *
   *   error/noop - the error message (for reflexError), otherwise null
   *
   *   reflexId - a UUID4 or developer-provided unique identifier for each Reflex
   */

  // Assuming you create a "Employee#dance" action in your Reflex class
  // you'll be able to use the following lifecycle methods:

  beforeDance(element, reflex, noop, reflexId) {}

  associateSuccess(element, reflex, noop, reflexId) {
    alert('aki')
    //   element.innerText = '\nDanced like no one was watching! Was someone watching?'
  }

  // danceError(element, reflex, error, reflexId) {
  //   console.error('danceError', error);
  //   element.innerText = "\nCouldn\'t dance!"
  // }

  afterDesassociate(element, reflex, noop, reflexId) {
    alert('aki')
  }

  // finalizeDance(element, reflex, noop, reflexId) {
  //   element.innerText = '\nNow, the cleanup can begin!'
  // }
}
