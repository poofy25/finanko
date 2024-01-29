import styles from './contacts.module.scss'

function ContactsSection() {
    return ( 
        <section className={styles.container} id='contacte'>
            <h2>Contacte</h2>   
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1360.4355320650207!2d28.818949639723!3d47.00350458793748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1704539831098!5m2!1sen!2s"  Style="border:0;" Loading="lazy" ReleferrerPolicy="no-referrer-when-downgrade"></iframe>
        </section>
     );
}

export default ContactsSection;