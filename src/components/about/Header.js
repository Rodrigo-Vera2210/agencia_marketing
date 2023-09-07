import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

function Header() {
    return (
        <main>
            <div className="relative px-6 lg:px-8">
                <div className="mx-auto max-w-full mx-12 xl:pt-32 xl:pb-64 lg:pt-56 lg:pb-48 pt-24 pb-12">
                    <div>
                        <div>
                            <h1 className="text-4xl font-semibold tracking-tight pb-8 sm:text-7xl">
                                About us
                            </h1>
                            <p className="mt-6 text-2xl leading-10 text-black max-w-5xl">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Beatae ex architecto hic
                                adipisci quos expedita, eum harum animi autem
                                magnam quod inventore, labore possimus.
                                Reiciendis iure mollitia suscipit ut minus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit voluptate molestias aut corporis libero consectetur! Exercitationem numquam totam, modi dolore sunt neque fuga molestiae eos eaque ex aperiam quo eius.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Header;
