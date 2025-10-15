package com.lunarrrcraft.engine;

import org.lwjgl.opengl.GL11;

public class MainGameLoop {

    private DisplayManager displayManager;

    public void start() {
        displayManager = new DisplayManager();
        displayManager.createDisplay(1280, 720, "LunarrrCraft");

        while (!displayManager.shouldClose()) {
            GL11.glClear(GL11.GL_COLOR_BUFFER_BIT | GL11.GL_DEPTH_BUFFER_BIT);

            // TODO: render blocks and player

            displayManager.update();
        }

        displayManager.close();
    }

    public static void main(String[] args) {
        new MainGameLoop().start();
    }
}

GL11.glBegin(GL11.GL_QUADS);

// Front face (z positive)
GL11.glColor3f(1f, 0f, 0f); // Red
GL11.glVertex3f(-0.5f, -0.5f, 0.5f);
GL11.glVertex3f(0.5f, -0.5f, 0.5f);
GL11.glVertex3f(0.5f, 0.5f, 0.5f);
GL11.glVertex3f(-0.5f, 0.5f, 0.5f);

// Back face (z negative)
GL11.glColor3f(0f, 1f, 0f); // Green
GL11.glVertex3f(-0.5f, -0.5f, -0.5f);
GL11.glVertex3f(-0.5f, 0.5f, -0.5f);
GL11.glVertex3f(0.5f, 0.5f, -0.5f);
GL11.glVertex3f(0.5f, -0.5f, -0.5f);

// Left face (x negative)
GL11.glColor3f(0f, 0f, 1f); // Blue
GL11.glVertex3f(-0.5f, -0.5f, -0.5f);
GL11.glVertex3f(-0.5f, -0.5f, 0.5f);
GL11.glVertex3f(-0.5f, 0.5f, 0.5f);
GL11.glVertex3f(-0.5f, 0.5f, -0.5f);

// Right face (x positive)
GL11.glColor3f(1f, 1f, 0f); // Yellow
GL11.glVertex3f(0.5f, -0.5f, -0.5f);
GL11.glVertex3f(0.5f, 0.5f, -0.5f);
GL11.glVertex3f(0.5f, 0.5f, 0.5f);
GL11.glVertex3f(0.5f, -0.5f, 0.5f);

// Top face (y positive)
GL11.glColor3f(1f, 0f, 1f); // Magenta
GL11.glVertex3f(-0.5f, 0.5f, -0.5f);
GL11.glVertex3f(-0.5f, 0.5f, 0.5f);
GL11.glVertex3f(0.5f, 0.5f, 0.5f);
GL11.glVertex3f(0.5f, 0.5f, -0.5f);

// Bottom face (y negative)
GL11.glColor3f(0f, 1f, 1f); // Cyan
GL11.glVertex3f(-0.5f, -0.5f, -0.5f);
GL11.glVertex3f(0.5f, -0.5f, -0.5f);
GL11.glVertex3f(0.5f, -0.5f, 0.5f);
GL11.glVertex3f(-0.5f, -0.5f, 0.5f);

GL11.glEnd();
