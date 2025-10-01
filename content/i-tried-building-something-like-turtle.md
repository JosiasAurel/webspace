---
title: "I tried building something like Python Turtle"
description: "I tried building a tool that could draw using commands like Python Turtle module"
date: "2023-04-28"
---

Earlier this week I was doing some work on a tool I'm currently building in stealth (no worries, checkout [Tinker Quest](https://tinker.quest)).

I thought of implementing a mini drawing tool that works programmatically. The idea was to have something like Python's Turtle module but without much functionality for a start. Honestly I struggled a little, but I eventually figured the math in order to do this sort of thing.

The aim of this post is to share with you how it works and how I achieved this.

## A mini command language

The application has a mini command language that directs the tool where to plot the points on a virtual coordinate system and then link them.

Here is an example

```
M 200 200|R 90|F 100|R 90|F 100|R 90|F 100|R 90|F 100|
```

As you can see it is pretty simple. Briefly:

- **M**: Positions the cursor at the coordinates (200, 200) relative to the origin of your screen.
- **R**: Rotates the point's vector anti-clockwise by $\theta$ units.
- **F**: Moves the point by $x$ units in the direction given by the previous command, R.

## The maths

It stars off with a point vector, $v$ , where $(x, y)$ has the value $(200, 200)$ (or whatever coordinate you choose to place the point originally). Moreover, the point vector is thought to point toward the right i.e ->.

That basically means that if we run the above command, these will happen:

- Place the cursor at $(200, 200)$
- Rotate the point by $90°$ (the vector is now pointing upwards)
- Move the point by 100 units upward
- Rotate the point by $90°$ (we are now pointing right)
- Forward by 100 units
- ... and so on.

We end up with a square.

The accumulated rotations are kept in memory though. So, every rotation is added to a variable `accAngle` and when the above command has been completely executed, the value of `accAngle` will be 360.

But how is the new point calculated on every iteration? That's where trigonometry comes in.

Say we have a triangle like the one below. We want to move a certain distance $h$ forward, whatever the direction of our vector is, the movement $h$ corresponds to the displacement in the direction of our point vector, $v$.

![Triangle example](/shapes.svg)

Considering our current point, $v$, as the origin, if we compute the values of $x$ and $y$, we will get the $x_d$, $y_d$ displacement we can add to our original vector.

![Triangle example](/shapes_global.svg)

That means to get the new point, we will have $v_{new} = v + v_{\delta}$ where $v_\delta$ is the distance on x,y $(hcos\theta, hsin\theta)$ from the triangle.
