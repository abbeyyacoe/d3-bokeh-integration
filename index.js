import {div, empty} from "core/dom"
import * as p from "core/properties"
import {LayoutDOM, LayoutDOMView} from "models/layouts/layout_dom"

export class CustomView extends LayoutDOMView {
  initialize(options) {
    super.initialize(options)
    this.render()

    // Set BokehJS listener so that when the Bokeh slider has a change
    // event, we can process the new data
  }

  render() {
    // This is where you put your d3 code

    d3.select("body").selectAll("div")
    .data(this.model.dataset.get_column("x"))  // <-- The answer is here!
    .enter()
    .append("div")
    .attr("class", "bar")
    .style("height", function(d) {
        var barHeight = d * 5;
        return barHeight + "px";
    });
  }
}

export class Custom extends LayoutDOM {

  // If there is an associated view, this is typically boilerplate.
  default_view = CustomView

  // The ``type`` class attribute should generally match exactly the name
  // of the corresponding Python class.
  type = "Custom"
}

// The @define block adds corresponding "properties" to the JS model. These
// should normally line up 1-1 with the Python model class. Most property
// types have counterparts, e.g. bokeh.core.properties.String will be
// ``p.String`` in the JS implementation. Any time the JS type system is not
// yet as complete, you can use ``p.Any`` as a "wildcard" property type.
Custom.define({
  dataset:   [ p.Instance ]
})