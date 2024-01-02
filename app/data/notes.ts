export const NOTE_DATA: NoteType[] = [
  {
    id: "06010bc8-2b70-4c95-ba0f-840672df2cda",
    title: "Java Programming Notes",
    isArchive: false,
    labels: ["java"],
    color: { light: "#fed7aa", dark: "#9a3412" },
    text: `
    <h2>Introduction to Java</h2>
    <p>
        Java is a high-level, object-oriented programming language developed by Sun Microsystems.
        It is known for its platform independence, meaning Java programs can run on any device
        that has the Java Virtual Machine (JVM) installed.
    </p>

    <h2>Basic Java Syntax</h2>
    <p>
        Java programs are composed of classes and methods. Here's a simple example of a Java class:
    </p>
    <pre>
        <code>
public class HelloWorld {
public static void main(String[] args) {
    System.out.println("Hello, World!");
}
}
        </code>
    </pre>
    <p>
        In this example, we have a class named <code>HelloWorld</code> with a <code>main</code> method.
        The <code>main</code> method is the entry point of a Java program, and it prints "Hello, World!" to the console.
    </p>

<!-- Add more sections for different Java topics -->

<footer>
    <p>These are basic notes on Java programming. Explore more to deepen your understanding.</p>
</footer>`,
  },
  {
    id: "0704c636-687a-4f51-97e6-09204e1eb650",
    title: "Git and GitHub Notes",
    isArchive: true,
    labels: ["github"],
    color: { light: "#fed7aa", dark: "#9a3412" },
    text: `
    <h2>Introduction to Version Control</h2>
    <p>
        Version control is a system that records changes to a file or set of files over time.
        Git is a distributed version control system that allows multiple developers to work on a project simultaneously.
    </p>

<section>
    <h2>Basic Git Commands</h2>
    <p>
        Here are some fundamental Git commands:
    </p>
    <pre>
        <code>
# Initialize a new Git repository
git init

# Clone a repository from GitHub
git clone <repository_url>

# Add changes to the staging area
git add <filename>

# Commit changes to the repository
git commit -m "Commit message"

# Check the status of the repository
git status

# View the commit history
git log
        </code>
    </pre>
    <p>
        These commands are just the tip of the iceberg. Explore more to master Git.
    </p>
</section>

<section>
    <h2>Introduction to GitHub</h2>
    <p>
        GitHub is a web-based platform that uses Git for version control. It provides a collaborative environment
        for developers to host and review code, manage projects, and build software together.
    </p>
</section>

<!-- Add more sections for different Git and GitHub topics -->

<footer>
    <p>These are basic notes on Git and GitHub. Dive deeper into the world of version control to enhance your development workflow.</p>
</footer>`,
  },
];
